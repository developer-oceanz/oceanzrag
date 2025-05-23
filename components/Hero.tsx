'use client';

import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  const pathname = usePathname();

  const handleTryDemo = () => {
    // First try Next.js navigation
    router.push('/login');
    // If that doesn't work, fall back to direct navigation
    setTimeout(() => {
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }, 100);
  };

  return (
    <section className="relative pb-20 pt-48">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-6/12 px-4">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Chat with Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-500">Database</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your data into conversations. Ask questions, get insights, and explore your database through natural language interactions.
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg"
                onClick={handleTryDemo}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200"
              >
                Try Demo
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="w-full md:w-6/12 px-4 mt-12 md:mt-0">
            <div className="bg-white rounded-xl shadow-xl p-6">
              <div className="flex flex-col gap-4">
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="text-gray-700">How many sales were recorded last month?</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-gray-800">Based on your database, there were 1,247 sales transactions recorded last month, showing a 15% increase from the previous month.</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="text-gray-700">What are the top performing products?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}