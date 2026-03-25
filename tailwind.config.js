/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-green': '#2d5a27',
        'light-green': '#4a7c59',
        'gold': '#d4af37',
        'cream': '#f8f4e9',
        'dark-brown': '#5d4037',
        'light-brown': '#8d6e63',
        'text-dark': '#333333',
        'text-light': '#666666',
      },
      keyframes: {

        'floatBG': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.25' },
          '50%': { transform: 'translateY(-50px)', opacity: '0.4' },
        },
        'fadeInCard': {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'popDigit': {
          '0%': { transform: 'scale(0.4)', opacity: '0' },
          '60%': { transform: 'scale(1.2)', opacity: '1' },
          '100%': { transform: 'scale(1)' },
        },


        'softPulse': {
          '0%, 100%': { boxShadow: '0 20px 60px rgba(24, 179, 110, 0.4)' },
          '50%': { boxShadow: '0 25px 80px rgba(24, 179, 110, 0.6)' },
        },
        'orbFloat': {
          '0%, 100%': { transform: 'translateY(0px) scale(1) rotate(0deg)' },
          '33%': { transform: 'translateY(-25px) scale(1.05) rotate(120deg)' },
          '66%': { transform: 'translateY(15px) scale(0.95) rotate(240deg)' },
        },
        'cardSlideIn': {
          '0%': { opacity: '0', transform: 'translateX(-50px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
        },
        'titleReveal': {
          '0%': { opacity: '0', transform: 'translateY(30px)', letterSpacing: '-0.5px' },
          '100%': { opacity: '1', transform: 'translateY(0)', letterSpacing: 'normal' },
        },
        'lineExpand': {
          '0%': { width: '0px', opacity: '0' },
          '100%': { width: '60px', opacity: '1' },
        },
        'textReveal': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'visualAppear': {
          '0%': { opacity: '0', transform: 'translateX(50px) scale(0.9)' },
          '100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
        },
        'hubPulse': {
          '0%, 100%': { boxShadow: '0 20px 60px rgba(45, 90, 39, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.5)', transform: 'scale(1)' },
          '50%': { boxShadow: '0 20px 60px rgba(45, 90, 39, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.5), 0 0 0 15px rgba(45, 90, 39, 0.05)', transform: 'scale(1.02)' },
        },
        'hubSpin': {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.1) rotate(180deg)' },
          '100%': { transform: 'scale(1.05) rotate(360deg)' },
        },
        'iconBounce': {
          '0%, 100%': { transform: 'scale(1) translateY(0)' },
          '50%': { transform: 'scale(1.1) translateY(-5px)' },
        },
        'iconSpin': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '100%': { transform: 'rotate(360deg) scale(1.1)' },
        },
        'moduleEntrance': {
          '0%': { opacity: '0', transform: 'var(--node-position) scale(0) rotate(-180deg)' },
          '70%': { transform: 'var(--node-position) scale(1.1) rotate(10deg)' },
          '100%': { opacity: '1', transform: 'var(--node-position) scale(1) rotate(0deg)' },
        },
        'moduleHover': {
          '0%, 100%': { transform: 'var(--node-position) scale(1.15) rotate(5deg)' },
          '50%': { transform: 'var(--node-position) scale(1.18) rotate(3deg)' },
        },
        'activeModule': {
          '0%, 100%': { transform: 'var(--node-position) scale(1.12)', boxShadow: '0 20px 50px rgba(45, 90, 39, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 0 0 4px rgba(45, 90, 39, 0.15)' },
          '50%': { transform: 'var(--node-position) scale(1.14)', boxShadow: '0 20px 50px rgba(45, 90, 39, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 0 0 6px rgba(45, 90, 39, 0.2)' },
        },
        'beamFlow': {
          '0%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '16' },
        },
        'particleStream': {
          '0%': { transform: 'translate(0, 0) scale(1)', opacity: '0' },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { transform: 'var(--stream-end)', opacity: '0' },
        },
        'buttonReveal': {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.9)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'statusSlideIn': {
          '0%': { opacity: '0', transform: 'translateX(-120%) translateY(0)' },
          '60%': { opacity: '0.8', transform: 'translateX(-45%) translateY(-5px)' },
          '100%': { opacity: '1', transform: 'translateX(-50%) translateY(-5px)' },
        },
        'statusBounce': {
          '0%, 100%': { transform: 'translateX(-50%) translateY(-5px)' },
          '50%': { transform: 'translateX(-50%) translateY(-8px)' },
        },

        'card-entrance': {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg) scale(1)' },
          '33%': { transform: 'translateY(-30px) rotate(120deg) scale(1.1)' },
          '66%': { transform: 'translateY(15px) rotate(240deg) scale(0.9)' },
        },
        'slideInLeft': {
          'from': { transform: 'translateX(-50px)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        },
        'slideInRight': {
          'from': { transform: 'translateX(50px)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        },
        'growBar': {
          '0%': { transform: 'scaleY(0.7)', opacity: '0.6' },
          '100%': { transform: 'scaleY(1)', opacity: '1' },
        },
        'fadeInOut': {
          '0%, 100%': { opacity: '0', transform: 'translateX(-50%) translateY(10px)' },
          '50%': { opacity: '1', transform: 'translateX(-50%) translateY(0)' },
        },
        'particleFloat': {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%, 90%': { opacity: '0.3' },
          '100%': { transform: 'translateY(-100px) rotate(360deg)', opacity: '0' },
        },
        'dropletAppear': {
          'to': { opacity: '0.7' },
        },
        'dropletPulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.3)', opacity: '0.9' },
        },
        'shimmer': {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        'circle-pulse': {
          '0%, 100%': { transform: 'scale(0.8)', opacity: '0.7' },
          '50%': { transform: 'scale(1.2)', opacity: '1' },
        },
        'dots-bounce': {
          '0%, 80%, 100%': { transform: 'scale(0)' },
          '40%': { transform: 'scale(1)' },
        },
        'pulse-custom': {
          '0%, 100%': { transform: 'scale(0.8)', opacity: '0.7' },
          '50%': { transform: 'scale(1.2)', opacity: '1' },
        },
        'bounce-custom': {
          '0%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
        },
        'wave': {
          '0%, 40%, 100%': { transform: 'scaleY(0.4)' },
          '20%': { transform: 'scaleY(1)' },
        },
        'page-load': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'skeleton-loading': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        }
      },
      animation: {

        'floatBG': 'floatBG 14s infinite ease-in-out',
        'fadeInCard': 'fadeInCard 1s ease forwards',
        'popDigit': 'popDigit 1.3s ease forwards',


        'softPulse': 'softPulse 4s infinite ease-in-out',
        'orbFloat': 'orbFloat 8s ease-in-out infinite',
        'cardSlideIn': 'cardSlideIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'titleReveal': 'titleReveal 1s ease-out 0.3s both',
        'lineExpand': 'lineExpand 0.8s ease-out 0.8s both',
        'textReveal': 'textReveal 1s ease-out 0.5s both',
        'visualAppear': 'visualAppear 1s ease-out 0.7s both',
        'hubPulse': 'hubPulse 4s ease-in-out infinite',
        'hubSpin': 'hubSpin 1s ease',
        'iconBounce': 'iconBounce 3s ease-in-out infinite',
        'iconSpin': 'iconSpin 0.6s ease',
        'moduleEntrance': 'moduleEntrance 0.8s ease-out both',
        'moduleHover': 'moduleHover 1.5s ease-in-out infinite',
        'activeModule': 'activeModule 2s ease-in-out infinite',
        'beamFlow': 'beamFlow 3s linear infinite',
        'particleStream': 'particleStream 2s ease-out infinite',
        'buttonReveal': 'buttonReveal 1s ease-out 0.9s both',
        'statusSlideIn': 'statusSlideIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'statusBounce': 'statusBounce 0.3s ease-out 0.6s both',

        'card-entrance': 'card-entrance 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'slideInLeft': 'slideInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'slideInRight': 'slideInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'growBar': 'growBar 2.5s ease-in-out infinite alternate',
        'fadeInOut': 'fadeInOut 2.5s ease-in-out infinite alternate',
        'particleFloat': 'particleFloat 8s linear infinite',
        'dropletAppear': 'dropletAppear 0.3s ease forwards',
        'dropletPulse': 'dropletPulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s infinite',
        'circle-pulse': 'circle-pulse 1.5s ease-in-out infinite both',
        'dots-bounce': 'dots-bounce 1.4s ease-in-out infinite both',
        'pulse-custom': 'pulse-custom 2s infinite',
        'bounce-custom': 'bounce-custom 1.4s ease-in-out infinite both',
        'wave': 'wave 1.2s ease-in-out infinite',
        'page-load': 'page-load 2s linear infinite',
        'skeleton-loading': 'skeleton-loading 1.5s infinite',
      }
    },
  },
  plugins: [],
}
