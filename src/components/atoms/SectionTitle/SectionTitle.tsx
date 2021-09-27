import { memo, FC, HTMLAttributes, MouseEventHandler } from 'react';
import Link from 'next/link';
import { LinkIcon } from '@heroicons/react/outline';
import styles from './SectionTitle.module.css';

export interface Props
  extends Omit<HTMLAttributes<HTMLHeadingElement>, 'onClick'> {
  id: string;
  active: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const SectionTitle: FC<Props> = memo(
  ({
    id,
    active = false,
    className = '',
    children,
    onClick,
    ...props
  }: Props) => (
    <h2 {...props} id={id} className={className}>
      <Link href={`#${id}`}>
        {/* eslint-disable-next-line */}
        <a
          className={classNames({
            [styles.active]: active,
          })}
          onClick={onClick}
        >
          {children} <LinkIcon className={styles.icon} />
        </a>
      </Link>
    </h2>
  ),
);
