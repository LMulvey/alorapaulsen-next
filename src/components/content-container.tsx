import { HeadingOne } from './heading';
import clsx from 'clsx';
import { type ReactNode } from 'react';

type ContentContainerProps = {
  children: ReactNode;
  className?: string;
  title: string;
};

export const ContentContainer = ({
  children,
  className,
  title,
}: ContentContainerProps) => {
  return (
    <div className={clsx('prose prose-lg mt-12 mb-20', className)}>
      <HeadingOne>{title}</HeadingOne>
      {children}
    </div>
  );
};
