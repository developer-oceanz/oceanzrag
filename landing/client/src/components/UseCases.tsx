import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function UseCases() {
  const useCases = [
    {
      title: "Enterprise Task Automation",
      description: "Autonomous workflows that handle repetitive tasks while adapting to changing business requirements.",
      image: (
        <svg className="w-full h-48" viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="250" fill="#f8fafc" />
          <g transform="translate(50, 30)">
            <rect width="300" height="180" rx="5" fill="#fff" stroke="#e2e8f0" strokeWidth="2" />
            <rect x="20" y="20" width="260" height="30" rx="3" fill="#eff6ff" />
            <rect x="20" y="60" width="120" height="20" rx="3" fill="#dbeafe" />
            <rect x="160" y="60" width="120" height="20" rx="3" fill="#dbeafe" />
            <rect x="20" y="90" width="80" height="20" rx="3" fill="#dbeafe" />
            <rect x="120" y="90" width="80" height="20" rx="3" fill="#dbeafe" />
            <rect x="220" y="90" width="60" height="20" rx="3" fill="#dbeafe" />
            <rect x="20" y="120" width="260" height="40" rx="3" fill="#eff6ff" />
            
            <circle cx="40" cy="140" r="10" fill="#3b82f6" />
            <circle cx="80" cy="140" r="10" fill="#60a5fa" />
            <circle cx="120" cy="140" r="10" fill="#93c5fd" />
            <path d="M170,130 L250,130 L250,150 L170,150" fill="none" stroke="#3b82f6" strokeWidth="2" />
            <circle cx="250" cy="140" r="8" fill="#10b981" />
          </g>
        </svg>
      )
    },
    {
      title: "Intelligent Ops",
      description: "Security and DevOps teams augmented with proactive AI agents that detect and remediate issues.",
      image: (
        <svg className="w-full h-48" viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="250" fill="#f8fafc" />
          <g transform="translate(50, 30)">
            <rect width="300" height="180" rx="5" fill="#fff" stroke="#e2e8f0" strokeWidth="2" />
            <circle cx="150" cy="90" r="70" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="10,5" />
            <circle cx="150" cy="90" r="50" fill="none" stroke="#60a5fa" strokeWidth="2" />
            <rect x="130" y="70" width="40" height="40" rx="5" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
            <line x1="90" y1="90" x2="130" y2="90" stroke="#3b82f6" strokeWidth="2" />
            <line x1="170" y1="90" x2="210" y2="90" stroke="#3b82f6" strokeWidth="2" />
            <line x1="150" y1="30" x2="150" y2="70" stroke="#3b82f6" strokeWidth="2" />
            <line x1="150" y1="110" x2="150" y2="150" stroke="#3b82f6" strokeWidth="2" />
            <circle cx="90" cy="90" r="8" fill="#10b981" />
            <circle cx="210" cy="90" r="8" fill="#10b981" />
            <circle cx="150" cy="30" r="8" fill="#10b981" />
            <circle cx="150" cy="150" r="8" fill="#10b981" />
          </g>
        </svg>
      )
    },
    {
      title: "Autonomous Research Agents",
      description: "AI-powered research assistants that gather, analyze, and synthesize information from diverse sources.",
      image: (
        <svg className="w-full h-48" viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="250" fill="#f8fafc" />
          <g transform="translate(50, 30)">
            <rect width="300" height="180" rx="5" fill="#fff" stroke="#e2e8f0" strokeWidth="2" />
            <rect x="30" y="30" width="100" height="120" rx="3" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1" />
            <rect x="40" y="45" width="80" height="5" rx="1" fill="#60a5fa" />
            <rect x="40" y="55" width="70" height="5" rx="1" fill="#60a5fa" />
            <rect x="40" y="65" width="80" height="5" rx="1" fill="#60a5fa" />
            <rect x="40" y="85" width="60" height="5" rx="1" fill="#60a5fa" />
            <rect x="40" y="95" width="75" height="5" rx="1" fill="#60a5fa" />
            <rect x="40" y="105" width="50" height="5" rx="1" fill="#60a5fa" />
            <rect x="40" y="125" width="80" height="15" rx="2" fill="#dbeafe" />
            <path d="M140,90 L170,90" stroke="#3b82f6" strokeWidth="2" />
            <circle cx="170" cy="90" r="10" fill="#3b82f6" />
            <rect x="190" y="30" width="80" height="120" rx="3" fill="#ecfdf5" stroke="#10b981" strokeWidth="1" />
            <rect x="200" y="40" width="60" height="30" rx="2" fill="#d1fae5" />
            <rect x="200" y="80" width="60" height="30" rx="2" fill="#d1fae5" />
            <rect x="200" y="120" width="60" height="20" rx="2" fill="#10b981" />
            <text x="230" y="135" fontSize="12" textAnchor="middle" fill="white">Report</text>
          </g>
        </svg>
      )
    }
  ];

  return (
    <section id="use-cases" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Use Cases</h2>
          <p className="text-lg text-neutral-600">Our multi-agent system is designed to solve complex problems across industries.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden shadow-md bg-white transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {useCase.image}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-neutral-600 mb-4">{useCase.description}</p>
                <button 
                  className="text-secondary font-medium flex items-center group"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
