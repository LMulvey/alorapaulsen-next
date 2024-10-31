import { newsreader } from '@/lib/fonts';
import clsx from 'clsx';
import { type ReactNode } from 'react';

type HeadingProps = { children: ReactNode; className?: string };

export const HeadingOne = ({ children, className }: HeadingProps) => {
  return (
    <h1 className={clsx('font-bold', newsreader.className, className)}>
      {children}
    </h1>
  );
};
