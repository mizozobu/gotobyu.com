import { memo, FC, HTMLAttributes, MouseEventHandler } from 'react';
import Link from 'next/link';
import { LinkIcon } from '@heroicons/react/outline';
import styles from './SectionTitle.module.css';

export interface Props
  extends Omit<HTMLAttributes<HTMLHeadingElement>, 'onClick'> {
  id: string;
  active: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const SectionTitle: FC<Props> = memo(
  ({
    active = false,
    className = '',
    id,
    children,
    onClick,
    ...props
  }: Props) => (
    <Link href={`#${id}`}>
      <a>
        <h2 {...props} className={classNames('inline-block', className)}>
          <button type='button' onClick={onClick}>
            <span
              className={classNames(
                'text-2xl md:text-4xl font-bold',
                styles['section-title'],
                { [styles.active]: active },
              )}
            >
              {children} <LinkIcon className='inline h-6 text-indigo-200' />
            </span>
          </button>
        </h2>
      </a>
    </Link>
  ),
);
