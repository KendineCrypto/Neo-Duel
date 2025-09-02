import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

function Hero({ onEarlyAccessClick }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'days', value: timeLeft.days },
    { label: 'hours', value: timeLeft.hours },
    { label: 'minutes', value: timeLeft.minutes },
    { label: 'seconds', value: timeLeft.seconds }
  ];

  return (
    <section className="flex-1 flex items-center justify-center min-h-[80vh] px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span>
            The Future of
          </span>
          <br />
          <span>
            Gaming & Finance
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-night-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Experience the revolutionary fusion of blockchain technology and immersive gaming. 
          Join the EvoDuel ecosystem and be part of the next generation of GameFi.
        </motion.p>

        {/* Early Access Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.button
            onClick={onEarlyAccessClick}
            className="btn-primary text-xl md:text-2xl px-12 py-6 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated background effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-mystic-turquoise to-mystic-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Button text */}
            <span className="relative z-10">Early Access</span>
            
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
            />
          </motion.button>
        </motion.div>

        {/* Countdown Timer Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          {/* Launch in title with gradient background technique */}
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-mystic-purple to-mystic-turquoise p-[2px] rounded-xl animate-mystic-pulse">
              <div className="bg-night-950 rounded-xl px-6 py-3">
                <h3 className="text-2xl md:text-3xl font-bold text-mystic-turquoise">
                  Launch in:
                </h3>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                className="bg-gradient-to-br from-night-800 to-night-900 rounded-2xl p-4 shadow-lg hover:shadow-2xl hover:shadow-mystic-purple/20 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <motion.div
                  key={unit.value}
                  className="text-3xl md:text-4xl font-bold text-mystic-purple mb-2 group-hover:text-mystic-turquoise transition-colors duration-300"
                  initial={{ scale: 1.2, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {unit.value.toString().padStart(2, '0')}
                </motion.div>
                <div className="text-sm text-night-400 uppercase tracking-wider group-hover:text-night-300 transition-colors duration-300">
                  {unit.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
