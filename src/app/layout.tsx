// eslint-disable-next-line import/no-unassigned-import
import './globals.css';
import { RootNavigation } from '@/components/navigation';
import RootLayoutSidebar from '@/components/sidebar';
import { archivo } from '@/lib/fonts';
import clsx from 'clsx';
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
      <body className="max-w-[1440px] mx-auto mt-10">
        <main className="grid md:grid-cols-12 md:gap-8 p-3 md:p-10">
          <RootLayoutSidebar className="col-span-full md:col-span-4" />
          <section
            className={clsx('col-span-full md:col-span-7', archivo.className)}
          >
            <RootNavigation />
            <div className="pl-6">{children}</div>
          </section>
        </main>
      </body>
    </html>
  );
}
