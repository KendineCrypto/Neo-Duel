import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

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

function EarlyAccessModal({ isOpen, onClose, onComplete }) {
  const [followStates, setFollowStates] = useState({
    megaeth: { following: false, loading: false },
    evoduel: { following: false, loading: false }
  });

  const handleFollow = async (project) => {
    console.log('Starting follow for:', project);
    setFollowStates(prev => ({
      ...prev,
      [project]: { ...prev[project], loading: true }
    }));

    // Simulate 15-second loading
    setTimeout(() => {
      console.log('Follow completed for:', project);
      setFollowStates(prev => {
        const newState = {
          ...prev,
          [project]: { following: true, loading: false }
        };
        
        console.log('New state after follow:', newState);
        
        // Check if both are completed using the new state
        if (newState.megaeth.following && newState.evoduel.following) {
          console.log('Both follows completed, calling onComplete');
          setTimeout(onComplete, 1000);
        }
        
        return newState;
      });
    }, 15000);
  };

  const followButtons = [
    {
      project: 'megaeth',
      text: 'Follow MegaETH Project on X',
      icon: '𝕏'
    },
    {
      project: 'evoduel',
      text: 'Follow EvoDuel Project on X',
      icon: '𝕏'
    }
  ];

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content p-8 max-w-md mx-auto mt-20"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-night-400 hover:text-mystic-gray text-2xl transition-colors duration-200"
        >
          ×
        </button>
        
        <div className="text-center">
          {/* Modal title with gradient background technique */}
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-mystic-purple to-mystic-turquoise p-[2px] rounded-xl animate-mystic-flicker">
              <div className="bg-night-950 rounded-xl px-6 py-3">
                <h2 className="text-3xl font-bold text-white">
                  Join the EvoDuel Early Access
                </h2>
              </div>
            </div>
          </div>
          
          <motion.p 
            className="text-night-400 text-sm mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Follow both projects to proceed to wallet address submission.
          </motion.p>
          
          <div className="mt-8 space-y-4">
            {followButtons.map((button, index) => (
              <motion.button
                key={button.project}
                onClick={() => handleFollow(button.project)}
                disabled={followStates[button.project].following || followStates[button.project].loading}
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 ${
                  followStates[button.project].following
                    ? 'bg-gradient-to-r from-mystic-turquoise to-mystic-purple text-night-950'
                    : followStates[button.project].loading
                    ? 'bg-gradient-to-r from-night-700 to-night-800 text-mystic-gray cursor-not-allowed'
                    : 'bg-gradient-to-r from-mystic-purple to-mystic-neon hover:from-mystic-purple/90 hover:to-mystic-neon/90 text-white hover:scale-105'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={!followStates[button.project].following && !followStates[button.project].loading ? { scale: 1.02 } : {}}
                whileTap={!followStates[button.project].following && !followStates[button.project].loading ? { scale: 0.98 } : {}}
              >
                {followStates[button.project].loading ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-mystic-gray border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span>Following...</span>
                  </>
                ) : followStates[button.project].following ? (
                  <>
                    <span className="text-2xl">✓</span>
                    <span>Followed!</span>
                  </>
                ) : (
                  <>
                    <span className="text-xl">{button.icon}</span>
                    <span>{button.text}</span>
                  </>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function WalletAddressForm({ onClose }) {
  const [walletAddress, setWalletAddress] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (walletAddress.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  };

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content p-8 max-w-md mx-auto mt-20"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-night-400 hover:text-mystic-gray text-2xl transition-colors duration-200"
        >
          ×
        </button>
        
        <div className="text-center">
          {/* Form title with gradient background technique */}
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-mystic-purple to-mystic-turquoise p-[2px] rounded-xl animate-mystic-flicker">
              <div className="bg-night-950 rounded-xl px-6 py-3">
                <h2 className="text-2xl font-bold text-white">
                  Enter Your EVM Wallet Address
                </h2>
              </div>
            </div>
          </div>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <input
                  type="text"
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  placeholder="0x..."
                  className="w-full px-4 py-3 bg-night-800 border border-night-700 rounded-xl text-white placeholder-night-400 focus:outline-none focus:border-mystic-purple focus:shadow-lg focus:shadow-mystic-purple/25 transition-all duration-200"
                  required
                />
              </motion.div>
              
              <motion.button
                type="submit"
                className="w-full btn-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Wallet Address
              </motion.button>
            </form>
          ) : (
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-mystic-turquoise mb-2">
                Wallet Address Submitted!
              </h3>
              <p className="text-night-400">
                Thank you for joining EvoDuel Early Access. We'll be in touch soon!
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default App;
