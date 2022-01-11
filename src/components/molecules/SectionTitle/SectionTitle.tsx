import { LinkIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { memo, HTMLAttributes, MouseEventHandler } from 'react';
import { H2 } from '@cmp/atoms/H2';
import styles from './SectionTitle.module.css';

export interface Props
  extends Omit<HTMLAttributes<HTMLHeadingElement>, 'onClick'> {
  id: string;
  active: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const SectionTitle = memo(
  ({ id, active = false, children, onClick, ...props }: Props) => (
    <H2 {...props} id={id}>
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
    </H2>
  ),
);
