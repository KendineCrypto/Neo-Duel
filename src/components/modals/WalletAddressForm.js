import { motion } from 'framer-motion';
import React, { useState } from 'react';

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

export default WalletAddressForm;
