import { Archivo, Newsreader } from 'next/font/google';

export const newsreader = Newsreader({ display: 'swap', subsets: ['latin'] });
export const archivo = Archivo({
  display: 'swap',
  style: ['normal', 'italic'],
  subsets: ['latin'],
});
