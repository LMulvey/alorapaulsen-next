import typography from '@tailwindcss/typography';
import { type Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [typography],
  theme: {
    extend: {
      colors: {
        bubblegum: '#DD6AB4',
        'bubblegum-100': 'rgb(221, 201, 214)',
        'bubblegum-200': 'rgb(218, 182, 205)',
        'bubblegum-300': 'rgb(216, 162, 195)',
        'bubblegum-400': 'rgb(213, 141, 186)',
        'bubblegum-500': 'rgb(206, 122, 177)',
        lavender: '#8861B6',
        'lavender-100': 'rgb(201, 199, 215)',
        'lavender-200': 'rgb(181, 177, 206)',
        'lavender-300': 'rgb(159, 156, 198)',
        'lavender-400': 'rgb(143, 135, 190)',
        'lavender-500': 'rgb(122, 112, 181)',
        'light-gray': '#F0F0F0',
        'nostalgic-yellow': '#FFD766',
        'nostalgic-yellow-100': 'rgb(231, 223, 203)',
        'nostalgic-yellow-200': 'rgb(235, 220, 183)',
        'nostalgic-yellow-300': 'rgb(243, 215, 145)',
        'nostalgic-yellow-400': 'rgb(245, 212, 125)',
        'rich-black': '#000000',
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)'],
        sans: ['var(--font-geist-sans)'],
      },
    },
  },
};
export default config;
