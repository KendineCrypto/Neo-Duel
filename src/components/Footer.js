import { motion } from 'framer-motion';
import React from 'react';

function Footer() {
  return (
    <footer className="bg-void-950/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Additional Footer Content */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
              <div className="flex justify-center space-x-4">
                {[
                  { icon: "𝕏", label: "Twitter" },
                  { icon: "💬", label: "Discord" },
                  { icon: "📧", label: "Email" }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href="#"
                    className="text-void-400 hover:text-arcane-emerald text-2xl transition-colors duration-200"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Whitepaper', 'Roadmap'].map((link, index) => (
                  <motion.a
                    key={link}
                    href="#"
                    className="block text-void-400 hover:text-arcane-emerald transition-colors duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
              <motion.div
                className="flex flex-col space-y-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-void-800 border border-void-700 rounded-lg text-white placeholder-void-400 focus:outline-none focus:border-arcane-purple focus:shadow-lg focus:shadow-arcane-purple/25 transition-all duration-200"
                />
                <motion.button
                  className="btn-secondary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="mt-12 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            <p className="text-void-400 text-sm mb-4">
              © 2025 EvoDuel. All rights reserved. The future of gaming awaits.
            </p>
            
            {/* Powered by section */}
            <motion.div
              className="text-arcane-emerald text-sm font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              Powered by <span className="text-arcane-purple font-semibold">KendineCrypto_</span> & <span className="text-arcane-gold font-semibold">KriptoAlimi</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
