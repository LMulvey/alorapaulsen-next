/* eslint-disable import/no-unassigned-import */
import './globals.css';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  description: 'Alora Paulsen: Internet Researcher',
  title: 'Alora Paulsen: Internet Researcher',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
