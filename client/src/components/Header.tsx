import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  openModal: () => void;
}

export default function Header({ openModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    
    if (section) {
      // Close mobile menu if open
      setIsMobileMenuOpen(false);
      
      // Calculate position accounting for header height
      const headerHeight = document.getElementById('header')?.offsetHeight || 0;
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header 
        id="header"
        className={`fixed w-full z-50 bg-white/90 bg-blur transition-all duration-300 ${
          isScrolled ? 'py-2 shadow-sm' : 'py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-2xl md:text-3xl font-bold flex items-center">
            <img src="/assets/logo.png" alt="Oceanz Logo" className="h-8 md:h-10"/>
          </a>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden text-neutral-900"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('technology')} 
              className="text-neutral-600 hover:text-secondary transition-colors duration-300"
            >
              Technology
            </button>
            <button 
              onClick={() => scrollToSection('use-cases')} 
              className="text-neutral-600 hover:text-secondary transition-colors duration-300"
            >
              Use Cases
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-neutral-600 hover:text-secondary transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-neutral-600 hover:text-secondary transition-colors duration-300"
            >
              Contact
            </button>
            <Button 
              onClick={openModal} 
              className="bg-gradient-to-r from-secondary to-accent text-white hover:opacity-90 transition-opacity duration-300 shadow-sm"
            >
              Request Access
            </Button>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden bg-white shadow-md transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('technology')} 
              className="text-neutral-600 hover:text-secondary block py-2 transition-colors duration-300"
            >
              Technology
            </button>
            <button 
              onClick={() => scrollToSection('use-cases')} 
              className="text-neutral-600 hover:text-secondary block py-2 transition-colors duration-300"
            >
              Use Cases
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-neutral-600 hover:text-secondary block py-2 transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-neutral-600 hover:text-secondary block py-2 transition-colors duration-300"
            >
              Contact
            </button>
            <Button 
              onClick={openModal} 
              className="bg-gradient-to-r from-secondary to-accent text-white hover:opacity-90 transition-opacity duration-300 shadow-sm w-full"
            >
              Request Access
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
