import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#191919',
          darkgray: '#616161',
          gray: '#C0C0C0',
          white: '#f2f2f2',
          purple: '#770E89',
          purple2: '#93329F',
          purple3: '#A24CAF',
          purple4: '#4D1357',
          orange: '#FF5200',
          orange2: '#FF6A33',
          lightblue: '#04C5D9',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'custom-red-shadow': '0 0 10px rgba(255, 0, 0, 0.5)',
      },
      fontFamily: {
        title: ['Ravela-Moderniz', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@designbycode/tailwindcss-text-shadow')({
      shadowColor: 'rgba(0, 0, 0, 1)',
      shadowBlur: '2px',
      shadowOffsetX: '2px',
      shadowOffsetY: '1px',
    }),
    require('tailwind-scrollbar'),
    // Custom scrollbar styles
    function ({ addComponents }: any) {
      addComponents({
        '.scrollbar-hidden::-webkit-scrollbar': {
          display: 'none',
        },
        '.scrollbar-hidden': {
          '-ms-overflow-style': 'none', // for Internet Explorer and Edge
          'scrollbar-width': 'none', // for Firefox
        },
      });
    },
  ],
};

export default config;
