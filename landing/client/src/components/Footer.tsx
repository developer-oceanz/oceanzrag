import React from 'react';
import { 
  Twitter, 
  Linkedin, 
  Mail, 
  SendHorizonal
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { trackEvent } from '@/lib/analytics';

const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" })
});

type NewsletterValues = z.infer<typeof newsletterSchema>;

export default function Footer() {
  const { toast } = useToast();
  
  const form = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: ""
    }
  });
  
  const onSubmit = async (data: NewsletterValues) => {
    try {
      // This would normally call an API endpoint to subscribe the user
      // For now, just show a success toast
      
      // Track newsletter subscription event
      trackEvent('newsletter_subscribed', 'form', 'footer');
      
      form.reset();
      
      toast({
        title: "Subscribed!",
        description: "You've been added to our newsletter.",
      });
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "We couldn't subscribe you to the newsletter. Please try again later.",
        variant: "destructive",
      });
    }
  };
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    
    if (section) {
      const headerHeight = document.getElementById('header')?.offsetHeight || 0;
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <footer className="bg-neutral-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="text-2xl font-bold text-neutral-900 flex items-center mb-4">
              <span className="gradient-text">Oceanz</span>
            </a>
            <p className="text-neutral-600 mb-6">Building the future of autonomous agent infrastructure.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-500 hover:text-secondary transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-500 hover:text-secondary transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-500 hover:text-secondary transition-colors duration-300">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-neutral-600 hover:text-secondary transition-colors duration-300"
                >
                  About
                </button>
              </li>
              <li>
                <a href="#" className="text-neutral-600 hover:text-secondary transition-colors duration-300">Careers</a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-neutral-600 hover:text-secondary transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-600 hover:text-secondary transition-colors duration-300">Documentation</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-secondary transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-secondary transition-colors duration-300">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-neutral-600 mb-4">Join our newsletter for the latest updates.</p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-grow">
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="Your email" 
                          className="px-4 py-2 rounded-l-md border border-r-0 border-neutral-300 focus:outline-none focus:ring-1 focus:ring-secondary/50"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="bg-secondary text-white px-4 py-2 rounded-r-md hover:bg-secondary-dark transition-colors duration-300"
                >
                  <SendHorizonal className="h-5 w-5" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
        
        <div className="border-t border-neutral-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-neutral-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Oceanz. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-neutral-500 hover:text-secondary text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-neutral-500 hover:text-secondary text-sm transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
