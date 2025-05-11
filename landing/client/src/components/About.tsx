import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
          </motion.div>
          
          <motion.div 
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-neutral-600 leading-relaxed">
              We're building the next layer of autonomous agent infrastructure to empower organizations with AI systems that can reason, plan, and execute complex tasks without constant human supervision.
            </p>
            <p className="text-xl text-neutral-600 leading-relaxed mt-6">
              Our proprietary multi-agent coordination engine enables truly autonomous systems that can tackle real-world problems through intelligent delegation and collaboration.
            </p>
            <p className="text-lg text-neutral-500 mt-8 italic">
              Founded by engineers and researchers from leading AI research labs and technology companies.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
