// eslint-disable-next-line import/no-unassigned-import
import './globals.css';
import { ExternalLink } from '@/components/external-link';
import { RootNavigation } from '@/components/navigation';
import RootLayoutSidebar from '@/components/sidebar';
import { archivo } from '@/lib/fonts';
import clsx from 'clsx';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
  description:
    'Alora Paulsen Mulvey studies the intersection of digital culture, motherhood, and social media influence.',
  keywords:
    'digital culture, mom influencers, momfluencers, feminist media studies, social media research, attention economy, digital communities, maternal influence, online celebrity, feminist research, digital activism, media production, social media entertainment, digital motherhood, online communities, feminist theory, digital ethnography, influencer culture, social media studies, digital feminism',
  metadataBase: new URL('https://alorapaulsen.com'),
  openGraph: {
    description:
      'Alora Paulsen Mulvey studies the intersection of digital culture, motherhood, and social media influence.',
    locale: 'en_US',
    title: 'Alora Paulsen: Internet Researcher',
    type: 'website',
  },
  robots: {
    follow: true,
    index: true,
  },
  title: 'Alora Paulsen: Internet Researcher',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-[1440px] min-h-screen justify-between mx-auto flex flex-col gap-0">
        <main className="grid lg:grid-cols-12 lg:gap-8 p-3 lg:p-10 mt-10">
          <RootLayoutSidebar className="col-span-full lg:col-span-4" />
          <section
            className={clsx('col-span-full lg:col-span-8', archivo.className)}
          >
            <RootNavigation />
            <div className="pl-6">{children}</div>
          </section>
        </main>
        <footer className="w-full bg-white italic text-xs p-6 lg:pt-8 px-20 border-t border-t-lavender-100/70">
          <p>
            Copyright &copy; {new Date().getFullYear()} Alora Paulsen Mulvey
          </p>
          <p>Content by Alora Paulsen Mulvey</p>
          <p>Branding by Mikaël Neves</p>
          <p>
            Built by{' '}
            <ExternalLink
              ariaLabel="Lee's personal website"
              hideLinkIcon
              href="https://leemulvey.com"
            >
              Lee Mulvey
            </ExternalLink>
          </p>
        </footer>
      </body>
    </html>
  );
}
