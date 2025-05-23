
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setIsMobileMenuOpen(false);
      const headerHeight = document.getElementById('header')?.offsetHeight || 0;
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      id="header"
      className={`fixed w-full z-50 bg-white/90 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? 'py-2 shadow-sm' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img 
            src="images/logo.png" 
            alt="Oceanz Logo" 
            className="h-8 w-auto md:h-10"
          />
        </a>
        
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="md:hidden text-neutral-900"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('technology')} 
            className="text-neutral-600 hover:text-blue-600 transition-colors duration-300"
          >
            Technology
          </button>
          <button 
            onClick={() => scrollToSection('use-cases')} 
            className="text-neutral-600 hover:text-blue-600 transition-colors duration-300"
          >
            Use Cases
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-neutral-600 hover:text-blue-600 transition-colors duration-300"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-neutral-600 hover:text-blue-600 transition-colors duration-300"
          >
            Contact
          </button>
          <Button 
            variant="default"
            className="shadow-sm"
            onClick={() => router.push('/login')}
          >
            Try Demo
          </Button>
        </nav>
      </div>
      
      <div className={`md:hidden bg-white shadow-md transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <button 
            onClick={() => scrollToSection('technology')} 
            className="text-neutral-600 hover:text-blue-600 block py-2 transition-colors duration-300"
          >
            Technology
          </button>
          <button 
            onClick={() => scrollToSection('use-cases')} 
            className="text-neutral-600 hover:text-blue-600 block py-2 transition-colors duration-300"
          >
            Use Cases
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-neutral-600 hover:text-blue-600 block py-2 transition-colors duration-300"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-neutral-600 hover:text-blue-600 block py-2 transition-colors duration-300"
          >
            Contact
          </button>
          <Button 
            variant="outline" 
            className="w-full mt-2"
            onClick={() => router.push('/login')}
          >
            Try Demo
          </Button>
        </div>
      </div>
    </header>
  );
}
