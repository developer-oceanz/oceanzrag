import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function ContactUs() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-neutral-600 mb-8">
            Ready to explore how our AI agents can transform your operations? Let&apos;s talk.
          </p>
          <Button
            size="lg"
            className="px-8 py-6 text-lg"
          >
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}