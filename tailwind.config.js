/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mystic': {
          purple: '#6D28D9',
          turquoise: '#14B8A6',
          gray: '#E5E7EB',
          neon: '#9333EA',
        },
        'night': {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#0D0D0D', // Almost black background
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'mystic-pulse': 'mystic-pulse 3s ease-in-out infinite alternate',
        'mystic-flicker': 'mystic-flicker 4s ease-in-out infinite',
        'neon-glow': 'neon-glow 2.5s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(109, 40, 217, 0.5)',
            textShadow: '0 0 10px rgba(109, 40, 217, 0.5)'
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(109, 40, 217, 0.8)',
            textShadow: '0 0 20px rgba(109, 40, 217, 0.8)'
          }
        },
        'mystic-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(109, 40, 217, 0.3)',
            textShadow: '0 0 10px rgba(109, 40, 217, 0.3)'
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(109, 40, 217, 0.6)',
            textShadow: '0 0 20px rgba(109, 40, 217, 0.6)'
          }
        },
        'mystic-flicker': {
          '0%, 100%': { 
            boxShadow: '0 0 15px rgba(147, 51, 234, 0.4)',
            textShadow: '0 0 8px rgba(147, 51, 234, 0.4)'
          },
          '25%': { 
            boxShadow: '0 0 25px rgba(147, 51, 234, 0.7)',
            textShadow: '0 0 15px rgba(147, 51, 234, 0.7)'
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)',
            textShadow: '0 0 12px rgba(147, 51, 234, 0.5)'
          },
          '75%': { 
            boxShadow: '0 0 30px rgba(147, 51, 234, 0.8)',
            textShadow: '0 0 18px rgba(147, 51, 234, 0.8)'
          }
        },
        'neon-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(20, 184, 166, 0.4)',
            textShadow: '0 0 10px rgba(20, 184, 166, 0.4)'
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(20, 184, 166, 0.7)',
            textShadow: '0 0 20px rgba(20, 184, 166, 0.7)'
          }
        }
      }
    },
  },
  plugins: [],
}
