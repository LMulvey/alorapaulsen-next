import { type Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        bubblegum: 'var(--bubblegum)',
        'bubblegum-100': 'var(--bubblegum-100)',
        'bubblegum-200': 'var(--bubblegum-200)',
        'bubblegum-300': 'var(--bubblegum-300)',
        'bubblegum-400': 'var(--bubblegum-400)',
        'bubblegum-500': 'var(--bubblegum-500)',
        lavender: 'var(--lavender)',
        'lavender-100': 'var(--lavender-100)',
        'lavender-200': 'var(--lavender-200)',
        'lavender-300': 'var(--lavender-300)',
        'lavender-400': 'var(--lavender-400)',
        'lavender-500': 'var(--lavender-500)',
        'light-gray': 'var(--light-gray)',
        'nostalgic-yellow': 'var(--nostalgic-yellow)',
        'nostalgic-yellow-100': 'var(--nostalgic-yellow-100)',
        'nostalgic-yellow-200': 'var(--nostalgic-yellow-200)',
        'nostalgic-yellow-300': 'var(--nostalgic-yellow-300)',
        'nostalgic-yellow-400': 'var(--nostalgic-yellow-400)',
        'rich-black': 'var(--rich-black)',
        white: 'var(--white)',
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)'],
        sans: ['var(--font-geist-sans)'],
      },
    },
  },
};
export default config;
