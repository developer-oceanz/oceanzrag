import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  MessageSquare, 
  Brain, 
  Layers, 
  Plug 
} from 'lucide-react';

export default function Technology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const technologies = [
    {
      title: "Agent-to-agent communication",
      description: "Seamless information exchange between agents with built-in conflict resolution protocols.",
      icon: <MessageSquare className="text-secondary text-xl" />
    },
    {
      title: "Long-term memory & planning",
      description: "Sophisticated memory architecture enabling context retention and strategic planning capabilities.",
      icon: <Brain className="text-secondary text-xl" />
    },
    {
      title: "Modular architecture",
      description: "Plug-and-play agents with specialized capabilities that can be composed for complex tasks.",
      icon: <Layers className="text-secondary text-xl" />
    },
    {
      title: "External API interfaces",
      description: "Secure integrations with external systems and private data sources for real-world actions.",
      icon: <Plug className="text-secondary text-xl" />
    }
  ];

  return (
    <section id="technology" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Overview</h2>
          <p className="text-lg text-neutral-600">Our proprietary multi-agent coordination engine enables complex AI systems to work together seamlessly.</p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {technologies.map((tech, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                {tech.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{tech.title}</h3>
              <p className="text-neutral-600">{tech.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Coordination diagram */}
        <motion.div 
          className="mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="w-full rounded-xl shadow-lg bg-white p-6 relative overflow-hidden">
            <svg viewBox="0 0 800 300" className="w-full h-auto">
              <defs>
                <linearGradient id="diagramGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              
              {/* Coordination cycle */}
              <g transform="translate(50, 50)">
                {/* Connecting lines */}
                <motion.path 
                  d="M100,100 L200,100 L300,100 L400,100 L500,100 L600,100" 
                  stroke="url(#diagramGrad)" 
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                
                {/* Curved return path */}
                <motion.path 
                  d="M600,100 C600,180 100,180 100,100" 
                  stroke="url(#diagramGrad)" 
                  strokeWidth="3"
                  strokeDasharray="5,5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                />
                
                {/* Nodes */}
                <g>
                  <motion.circle cx="100" cy="100" r="30" fill="#3B82F6" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }} />
                  <text x="100" y="105" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">Planner</text>
                </g>
                
                <g>
                  <motion.circle cx="250" cy="100" r="30" fill="#4F86F7" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }} />
                  <text x="250" y="105" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">Tool-user</text>
                </g>
                
                <g>
                  <motion.circle cx="400" cy="100" r="30" fill="#60A5FA" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.4 }} />
                  <text x="400" y="105" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">Executor</text>
                </g>
                
                <g>
                  <motion.circle cx="550" cy="100" r="30" fill="#10B981" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.6 }} />
                  <text x="550" y="105" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">Feedback</text>
                </g>
              </g>
            </svg>
          </div>
          <div className="mt-4 text-center text-neutral-500 text-sm">
            <p>The Oceanz Coordination Loop: Planner → Tool-user → Executor → Feedback</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
