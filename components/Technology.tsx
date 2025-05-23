import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { MessageSquare, Brain, Layers, Plug } from 'lucide-react';

export default function Technology() {
  return (
    <section id="technology" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Powered by Advanced Technology</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">RAG Architecture</h3>
            <p className="text-gray-600">
              Utilizes Retrieval Augmented Generation to combine the power of large language models with your private database.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Vector Search</h3>
            <p className="text-gray-600">
              Advanced embedding technology enables semantic search capabilities across your entire database.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Real-time Processing</h3>
            <p className="text-gray-600">
              Get instant responses with our optimized query processing and AI inference pipeline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}