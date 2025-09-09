import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import EarlyAccessModal from './components/modals/EarlyAccessModal';
import WalletAddressForm from './components/modals/WalletAddressForm';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showWalletForm, setShowWalletForm] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleModalComplete = () => {
    console.log('Modal completed, showing wallet form');
    setIsModalOpen(false);
    setShowWalletForm(true);
  };

  console.log('App state:', { isModalOpen, showWalletForm });

  return (
    <div className="min-h-screen bg-gradient-to-br from-night-950 via-night-900 to-black">
      <Header />
      <Hero onEarlyAccessClick={openModal} />
      <Footer />
      
      <AnimatePresence>
        {isModalOpen && (
          <EarlyAccessModal 
            isOpen={isModalOpen} 
            onClose={closeModal} 
            onComplete={handleModalComplete} 
          />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {showWalletForm && (
          <WalletAddressForm onClose={() => setShowWalletForm(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}


export default App;
