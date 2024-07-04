import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          black: '#1A1A1A',
          gray: '#222222',
          text: '#DDDDDD',
          accent: '#FF6B6B',
          highlight: '#ABC302',
          blue: '#4A90E2',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'custom-red-shadow': '0 0 10px rgba(255, 0, 0, 0.5)',
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
  ],
};
export default config;
