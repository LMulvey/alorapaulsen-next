import { Badge } from './badge';
import clsx from 'clsx';
import Link from 'next/link';

export type TOCItem = {
  id: string;
  items?: TOCItem[];
  level: number;
  new?: boolean;
  title: string;
};

type TOCItemsProps = {
  activeId?: string;
  items: TOCItem[];
  level?: number;
};

type TableOfContentsProps = {
  activeId?: string;
  className?: string;
  items: TOCItem[];
};

const TOCItems = ({ activeId, items, level = 0 }: TOCItemsProps) => {
  return (
    <ul className={clsx('space-y-1 text-sm', level > 0 && 'ml-4 mt-1')}>
      {items.map((item) => (
        <li key={item.id}>
          <Link
            className={clsx(
              'py-1 text-muted-foreground transition-colors hover:text-foreground flex items-center gap-2',
              activeId === item.id && 'font-medium text-foreground',
            )}
            href={`#${item.id}`}
          >
            {item.new ? <Badge variant="default">New</Badge> : null}
            {item.title}
          </Link>
          {item.items?.length ? (
            <TOCItems
              activeId={activeId}
              items={item.items}
              level={level + 1}
            />
          ) : null}
        </li>
      ))}
    </ul>
  );
};

export const TableOfContents = ({
  activeId,
  className,
  items,
}: TableOfContentsProps) => {
  return (
    <div className={clsx('w-full rounded-lg border bg-card p-4', className)}>
      <h3 className="mb-3 text-lg font-semibold">Table of Contents</h3>
      <TOCItems
        activeId={activeId}
        items={items}
      />
    </div>
  );
};
