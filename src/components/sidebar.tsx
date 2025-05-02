import { LinkedinLogoIcon } from './icons';
import { archivo, newsreader } from '@/lib/fonts';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { type ReactNode } from 'react';

type SidebarItem = {
  content: string;
  href?: string;
  icon?: ReactNode;
  id: `separator-${number}` | string;
};

const SIDEBAR_ITEMS: SidebarItem[] = [
  { content: 'Calgary, AB, Canada', id: 'address' },
  {
    content: 'hello@alorapaulsen.com',
    href: 'mailto:hello@alorapaulsen.com',
    id: 'email',
  },
  { content: '', id: 'separator-1' },
  {
    content: 'LinkedIn',
    href: 'https://www.linkedin.com/in/alorapaulsen/',
    icon: <LinkedinLogoIcon size={24} />,
    id: 'linkedin',
  },
];

const sidebarItemClasses = clsx(
  'text-md lg:text-xl m-0 p-0 leading-0 flex flex-row items-center gap-2',
  archivo.className,
);

export default function RootLayoutSidebar({
  className,
}: {
  className?: string;
}) {
  return (
    <nav
      className={clsx(
        'w-full md:w-[375px] px-10 flex flex-col gap-4 h-min lg:sticky top-10',
        className,
      )}
    >
      <div className="w-full relative aspect-[1/1] rounded-full">
        <Image
          alt="Alora Paulsen: Internet Researcher"
          className="rounded-full"
          fill
          src="/images/alora-headshot.png"
        />
      </div>
      <Link
        className="flex flex-col gap-4 no-underline bg-white"
        href="/"
      >
        <Image
          alt="Alora Paulsen: Internet Researcher"
          height={271}
          sizes="100%"
          src="/logos/logo-stacked.svg"
          width={512}
        />
        <h1 className={clsx(newsreader.className, 'text-3xl')}>
          Internet Researcher
        </h1>
      </Link>
      <div className="flex flex-row flex-wrap lg:flex-col gap-3 lg:mt-12">
        {SIDEBAR_ITEMS.map((item) => {
          if (item.href) {
            return (
              <Link
                className={sidebarItemClasses}
                href={item.href}
                key={item.id}
                rel={
                  item.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                target={item.href.startsWith('http') ? '_blank' : undefined}
              >
                {item.icon}
                {item.content}
              </Link>
            );
          }

          if (item.id.startsWith('separator')) {
            return (
              <div
                className="w-full h-[1px] bg-slate-900 shrink-0 my-4"
                key={item.id}
              />
            );
          }

          return (
            <p
              className={sidebarItemClasses}
              key={item.id}
            >
              {item.content}
            </p>
          );
        })}
      </div>
    </nav>
  );
}
