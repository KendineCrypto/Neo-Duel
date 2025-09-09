import { motion } from 'framer-motion';
import React, { useState } from 'react';

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

export default EarlyAccessModal;
