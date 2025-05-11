import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface HeroProps {
  openModal: () => void;
}

export default function Hero({ openModal }: HeroProps) {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 hero-pattern">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="gradient-text">Autonomous Agents.</span> <br className="hidden md:block" />
            <span>Coordinated Intelligence.</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-neutral-600 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A next-gen framework for orchestrating intelligent agents to solve real-world problems.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              onClick={openModal}
              className="bg-gradient-to-r from-secondary to-accent hover:from-secondary hover:to-accent-light text-white px-8 py-6 rounded-md transition-all duration-300 transform hover:scale-105 shadow-md" 
              size="lg"
            >
              Request Beta Access
            </Button>
            <Button 
              variant="outline" 
              className="border border-neutral-300 text-neutral-700 hover:bg-neutral-100 px-8 py-6 rounded-md transition-all duration-300"
              size="lg"
              onClick={() => {
                const technologySection = document.getElementById('technology');
                if (technologySection) {
                  const headerHeight = document.getElementById('header')?.offsetHeight || 0;
                  const sectionPosition = technologySection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                  window.scrollTo({
                    top: sectionPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Abstract animation */}
      <motion.div 
        className="mt-16 max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="rounded-xl overflow-hidden shadow-lg bg-neutral-100 aspect-video flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-neutral-100/50"></div>
          <svg viewBox="0 0 800 450" className="w-full h-full absolute inset-0">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            
            {/* Abstract nodes and connections representing AI agent network */}
            <g stroke="url(#grad1)" strokeWidth="2" fill="none">
              <motion.path 
                d="M200,225 C300,125 500,325 600,225" 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              />
              <motion.path 
                d="M200,225 C300,325 500,125 600,225" 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              />
              <motion.path 
                d="M400,125 C300,225 500,225 400,325" 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              />
            </g>
            
            <g fill="url(#grad2)">
              <motion.circle 
                cx="200" cy="225" r="20"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1.2 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              />
              <motion.circle 
                cx="400" cy="125" r="20"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1.2 }}
                transition={{ duration: 1.5, delay: 0.3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              />
              <motion.circle 
                cx="400" cy="325" r="20"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1.2 }}
                transition={{ duration: 1.5, delay: 0.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              />
              <motion.circle 
                cx="600" cy="225" r="20"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1.2 }}
                transition={{ duration: 1.5, delay: 0.9, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              />
            </g>
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
