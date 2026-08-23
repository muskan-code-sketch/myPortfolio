/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0A0B0F',
          raised: '#101219',
          surface: '#14161F',
          border: '#23262F',
        },
        ink: {
          DEFAULT: '#F3F4F8',
          dim: '#9AA0B4',
          faint: '#5B6178',
        },
        electric: '#3E7BFA',
        violet: '#8B5CF6',
        cyan: '#22D3EE',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(10,11,15,0) 0%, #0A0B0F 90%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(62,123,250,0.15), 0 8px 40px -8px rgba(62,123,250,0.25)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseLine: {
          '0%': { strokeDashoffset: '400' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        drift: 'drift 6s ease-in-out infinite',
        pulseLine: 'pulseLine 3s linear infinite',
      },
    },
  },
  plugins: [],
};
