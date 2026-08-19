/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#071521',
        panel: '#0d1b2a',
        panelAlt: '#101f30',
        accent: '#8dd3ff',
        accentSoft: '#d9f1ff',
        neon: '#6ee7b7',
        slateText: '#dfe8f5',
        subtle: '#9fb4c8',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(141, 211, 255, 0.18), 0 20px 45px rgba(15, 23, 42, 0.35)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
