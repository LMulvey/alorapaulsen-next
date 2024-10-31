import { LinkSimpleIcon } from './icons';
import clsx from 'clsx';
import { type ReactNode } from 'react';

type ExternalLinkProps = {
  ariaLabel: string;
  children: ReactNode;
  className?: string;
  hideLinkIcon?: boolean;
  href: string;
};

export const ExternalLink = ({
  ariaLabel,
  children,
  className,
  hideLinkIcon = false,
  href,
}: ExternalLinkProps) => {
  return (
    <a
      aria-label={ariaLabel}
      className={clsx('inline-flex flex-row items-center gap-1', className)}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {hideLinkIcon ? null : (
        <LinkSimpleIcon
          className="shrink-0"
          size={12}
        />
      )}
      {children}
    </a>
  );
};
