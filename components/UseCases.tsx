import React from 'react';
import { motion } from 'framer-motion';

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Data Analysis</h3>
            <p className="text-gray-600">
              Ask complex questions about your data and get insights in natural language.
            </p>
          </div>
          <div className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Knowledge Base</h3>
            <p className="text-gray-600">
              Turn your documentation into an interactive chat interface for easy access.
            </p>
          </div>
          <div className="p-6 border rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
            <p className="text-gray-600">
              Enable support teams to quickly find and retrieve accurate information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}