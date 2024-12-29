import { createResource } from '@/lib/actions/resources';
import { openai } from '@ai-sdk/openai';
import {
  type Message,
  convertToCoreMessages,
  createDataStreamResponse,
  streamObject,
  streamText,
  tool,
} from 'ai';
import { customModel } from '@/lib/ai';
import { models } from '@/lib/ai/models';
import { z } from 'zod';
import { findRelevantContent } from '@/lib/ai/embedding';
import { auth } from '@/app/(auth)/auth';
import {
  deleteChatById,
  getChatById,
  getDocumentById,
  saveChat,
  saveDocument,
  saveMessages,
  saveSuggestions,
} from '@/lib/db/queries';
import {
  generateUUID,
  getMostRecentUserMessage,
  sanitizeResponseMessages,
} from '@/lib/utils';
import { generateTitleFromUserMessage } from '../../actions';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {

  const {
    id,
    messages,
    modelId,
  }: { id: string; messages: Array<Message>; modelId: string } =
    await req.json();

  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    return new Response('Unauthorized', { status: 401 });
  }

  const userId = session.user.id;

  const model = models.find((model) => model.id === modelId);

  if (!model) {
    return new Response('Model not found', { status: 404 });
  }

  const coreMessages = convertToCoreMessages(messages);
  const userMessage = getMostRecentUserMessage(coreMessages);

  if (!userMessage) {
    return new Response('No user message found', { status: 400 });
  }

  const chat = await getChatById({ id });

  if (!chat) {
    const title = await generateTitleFromUserMessage({ message: userMessage });
    await saveChat({ id, userId: session.user.id, title });
  }

  const userMessageId = generateUUID();

  await saveMessages({
    messages: [
      { ...userMessage, id: userMessageId, createdAt: new Date(), chatId: id },
    ],
  });

  // const { messages } = await req.json();

  return createDataStreamResponse({
    execute: (dataStream) => {
      dataStream.writeData({
        type: 'user-message-id',
        content: userMessageId,
      });
      const result = streamText({
        model: customModel(model.apiIdentifier),
        messages: coreMessages,
        maxSteps: 5,
        system: `You are a helpful assistant. Check your knowledge base before answering any questions.
        Only respond to questions using information from tool calls.
        if no relevant information is found in the tool calls, respond, "Sorry, I don't know."`,
        tools: {
            getInformation: tool({
                description: `get information from your knowledge base to answer questions.`,
                parameters: z.object({
                    question: z.string().describe('the users question'),
                }),
                execute: async ({ question }) => {
                    return findRelevantContent(question, userId);
                  },
            }),
            addResource: tool({
                description: `add a resource to your knowledge base.
                If the user provides a random piece of knowledge unprompted, use this tool without asking for confirmation.`,
                parameters: z.object({
                content: z
                    .string()
                    .describe('the content or resource to add to the knowledge base'),
                }),
                execute: async ({ content }) => createResource({ content, userId }),
            }),
        },
        onFinish: async ({ response }) => {
          if (session.user?.id) {
            try {
              const responseMessagesWithoutIncompleteToolCalls =
                sanitizeResponseMessages(response.messages);

              await saveMessages({
                messages: responseMessagesWithoutIncompleteToolCalls.map(
                  (message) => {
                    const messageId = generateUUID();

                    if (message.role === 'assistant') {
                      dataStream.writeMessageAnnotation({
                        messageIdFromServer: messageId,
                      });
                    }

                    return {
                      id: messageId,
                      chatId: id,
                      role: message.role,
                      content: message.content,
                      createdAt: new Date(),
                    };
                  },
                ),
              });
            } catch (error) {
              console.error('Failed to save chat');
            }
          }
        },
        experimental_telemetry: {
          isEnabled: true,
          functionId: 'stream-text',
        },
      });
      result.mergeIntoDataStream(dataStream);
    },
  });
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return new Response('Not Found', { status: 404 });
  }

  const session = await auth();

  if (!session || !session.user) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const chat = await getChatById({ id });

    if (chat.userId !== session.user.id) {
      return new Response('Unauthorized', { status: 401 });
    }

    await deleteChatById({ id });

    return new Response('Chat deleted', { status: 200 });
  } catch (error) {
    return new Response('An error occurred while processing your request', {
      status: 500,
    });
  }
}