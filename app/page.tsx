'use client';

import Hero from '@/components/Hero';
import Technology from '@/components/Technology';
import UseCases from '@/components/UseCases';
import About from '@/components/About';
import ContactUs from '@/components/ContactUs';

import Navbar from '@/components/Navbar';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background hero-bg">
      <Navbar />
      <Hero />
      <Technology />
      <UseCases />
      <About />
      <ContactUs />
    </div>
  );
}