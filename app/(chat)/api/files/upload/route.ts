import { createResource } from '@/lib/actions/resources';
import { PdfReader } from "pdfreader";
import { auth } from '@/app/(auth)/auth';

// Function to extract text from a PDF file
const extractTextFromPDF = async (file: File): Promise<string> => {
  try {
    // Read the PDF file as a buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Wrap the parseBuffer method in a Promise
    return new Promise<string>((resolve, reject) => {
      let extractedText = '';

      new PdfReader().parseBuffer(buffer, (err, item) => {
        if (err) {
          reject(new Error('Error parsing PDF: ' + err));
        } else if (item && item.text) {
          extractedText += item.text;
        } else if (!item) {
          // End of the document, resolve the accumulated text
          resolve(extractedText);
        }
      });
    });
  } catch (error) {
    console.error('Error extracting text from PDF:', error);
    throw error;
  }
};

export async function POST(req: Request) {
  console.log('Inside POST /api/upload');
  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    return new Response('Unauthorized', { status: 401 });
  }
  
  const userId = session.user.id;

  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return new Response('No file provided', { status: 400 });
    }

    console.log('File type:', file.type);
    let content = '';

    if (file.type === 'text/plain') {
      console.log('File is text/plain');
      content = await file.text();
    } else if (file.type === 'application/pdf') {
      console.log('File is application/pdf');
      content = await extractTextFromPDF(file);
    } else {
      return new Response('Unsupported file type', { status: 415 });
    }

    if (content.length > 0) {
      await createResource({ content, userId });
      return new Response('File uploaded and content added to knowledge base', { status: 200 });
    } else {
      return new Response('No content found in the file', { status: 400 });
    }
  } catch (error) {
    console.error('Error handling file upload:', error);
    return new Response('An error occurred while processing the file', { status: 500 });
  }
}
