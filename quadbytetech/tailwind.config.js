/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fadeInUp': 'fadeInUp 1s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        glow: {
          '0%, 100%': {
            textShadow: '0 0 20px rgba(34, 197, 94, 0.5)',
          },
          '50%': {
            textShadow: '0 0 30px rgba(34, 197, 94, 0.8), 0 0 40px rgba(34, 197, 94, 0.3)',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-200% 0',
          },
          '100%': {
            backgroundPosition: '200% 0',
          },
        },
      },
      colors: {
        'green': {
          350: '#4ade80',
          450: '#22c55e',
          550: '#16a34a',
        }
      },
      boxShadow: {
        'green-glow': '0 0 20px rgba(34, 197, 94, 0.5)',
        'green-glow-lg': '0 0 40px rgba(34, 197, 94, 0.4)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}

