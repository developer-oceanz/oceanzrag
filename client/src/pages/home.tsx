import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Technology from '@/components/Technology';
import UseCases from '@/components/UseCases';
import BetaAccess from '@/components/BetaAccess';
import About from '@/components/About';
import Footer from '@/components/Footer';
import AccessModal from '@/components/AccessModal';
import { useState } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header openModal={openModal} />
      <Hero openModal={openModal} />
      <Technology />
      <UseCases />
      <BetaAccess openModal={openModal} />
      <About />
      <Footer />
      <AccessModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
