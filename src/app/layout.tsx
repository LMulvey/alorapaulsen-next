/* eslint-disable import/no-unassigned-import */
import './globals.css';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  description: 'Alora Paulsen: Internet Researcher',
  title: 'Alora Paulsen: Internet Researcher',
};

export default function RootLayout({
  children,
  sidebar,
}: Readonly<{
  children: React.ReactNode;
  sidebar: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-[1440px] mx-auto mt-10">
        <main className="md:grid md:grid-cols-2 md:gap-4">
          {sidebar}
          <section>{children}</section>
        </main>
      </body>
    </html>
  );
}
