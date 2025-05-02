'use client';
import { archivo } from '@/lib/fonts';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

type RouteName =
  | '_not-found'
  | 'contact'
  | 'cv'
  | 'home'
  | 'research'
  | 'teaching';
type Route = {
  href: string;
  id: RouteName;
  label: string;
};

/**
 * Nested routenames should be delimited with hyphens instead of slashes.
 * For example, /home/contact would be home-contact.
 * ORDER MATTERS HERE!
 */
const NAV_ROUTES: Route[] = [
  { href: '/cv', id: 'cv', label: 'CV' },
  { href: '/research', id: 'research', label: 'Research' },
  { href: '/teaching', id: 'teaching', label: 'Teaching' },
  { href: '/contact', id: 'contact', label: 'Contact' },
];

const isValidRoute = (value: string): value is RouteName => {
  return [
    '_not-found',
    'contact',
    'cv',
    'home',
    'publications',
    'research',
    'teaching',
  ].includes(value);
};

const parsePathnameAsRoute = (pathname: string): RouteName => {
  if (pathname === '/') {
    return 'home';
  }

  const maybeRouteName = pathname.slice(1).split('/').join('-');
  if (!isValidRoute(maybeRouteName)) {
    throw new Error(`Unexpected or unsupported route - ${maybeRouteName}`);
  }

  return maybeRouteName;
};

const isActiveRoute = (pathname: string, routeToTest: string) => {
  const routeName = parsePathnameAsRoute(pathname);
  return routeToTest === routeName;
};

const navClasses = clsx(
  'flex flex-row items-center gap-2 mt-16 lg:mt-0 mb-4 border-b lg:pl-6 border-b-lavender-100 text-sm lg:text-lg font-medium bg-white sticky top-0 pt-4 md:pt-0 md:static',
  archivo.className,
);
const navItemVariants = cva(
  'w-full flex flex-row items-center justify-center no-underline gap-1 rounded-[8px_8px_0px_0px] px-2 lg:px-8 py-2 transition-colors border border-lavender-100 border-b-0 hover:bg-bubblegum-400',
  {
    variants: {
      isActive: {
        false: ['bg-transparent'],
        true: ['bg-bubblegum-300'],
      },
    },
  },
);

export const RootNavigation = () => {
  const pathname = usePathname();

  return (
    <div className={navClasses}>
      {NAV_ROUTES.map(({ href, id, label }) => (
        <Fragment key={id}>
          <Link
            className={navItemVariants({
              isActive: isActiveRoute(pathname, id),
            })}
            href={href}
          >
            {label}
          </Link>
        </Fragment>
      ))}
    </div>
  );
};
