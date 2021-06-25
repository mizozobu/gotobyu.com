import { forwardRef, HTMLAttributes } from 'react';
import Link from 'next/link';
import { LinkIcon } from '@heroicons/react/solid';
import styles from './SectionTitle.module.css';

export interface Props extends HTMLAttributes<HTMLHeadingElement> {
  id: string;
  active: boolean;
}

export const SectionTitle = forwardRef<HTMLHeadingElement, Props>(
  ({ active = false, className = '', id, children, ...props }: Props, ref) => (
    <Link href={`#${id}`}>
      <a>
        <h2
          {...props}
          ref={ref}
          className={`mb-8 text-4xl font-bold ${className}`}
        >
          <span
            className={`cursor-pointer ${
              active ? `${styles['section-title']} ${styles.active}` : ''
            }`}
          >
            {children} <LinkIcon className='inline h-6 text-indigo-200' />
          </span>
        </h2>
      </a>
    </Link>
  ),
);
