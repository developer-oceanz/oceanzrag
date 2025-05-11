import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { trackEvent } from '@/lib/analytics';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

interface BetaAccessProps {
  openModal: () => void;
}

const betaFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().min(1, { message: "Company name is required" }),
  useCase: z.string().min(10, { message: "Please provide a brief description of your use case" }),
  consent: z.boolean().refine(val => val === true, { message: "You must agree to receive communications" }),
});

type BetaFormValues = z.infer<typeof betaFormSchema>;

export default function BetaAccess({ openModal }: BetaAccessProps) {
  const { toast } = useToast();
  
  // Define form
  const form = useForm<BetaFormValues>({
    resolver: zodResolver(betaFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      useCase: "",
      consent: false,
    },
  });
  
  const isSubmitting = form.formState.isSubmitting;

  const onSubmit = async (data: BetaFormValues) => {
    try {
      await apiRequest('POST', '/api/beta-request', data);
      
      // Track form submission event
      trackEvent('beta_request_submitted', 'form', 'beta_access');
      
      // Reset form
      form.reset();
      
      // Show success
      openModal();
      
    } catch (error) {
      console.error("Error submitting form:", error);
      
      toast({
        title: "Submission Failed",
        description: "We couldn't submit your request. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Request Private Beta Access</h2>
          <p className="text-neutral-300 mb-8">Join our growing network of partners testing the future of multi-agent AI systems.</p>
        </motion.div>
        
        <motion.div 
          className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-700 font-medium">Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your name" 
                        className="px-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-secondary/50" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-700 font-medium">Email Address</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="your.email@company.com" 
                        type="email"
                        className="px-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-secondary/50" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-700 font-medium">Company</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Company name" 
                        className="px-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-secondary/50" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="useCase"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-700 font-medium">Your Use Case</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Brief description of how you plan to use our technology" 
                        rows={4}
                        className="px-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-secondary/50" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="consent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox 
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-neutral-600 text-sm font-normal">
                        I agree to receive communications about Oceanz. We respect your privacy and will never share your information with third parties.
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-secondary to-accent text-white font-medium py-3 rounded-md hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02]"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}
