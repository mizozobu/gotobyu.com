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
    <div>
      <Link href={`#${id}`}>
        <a
          className={classNames(styles['section-title'], {
            [styles.active]: active,
          })}
        >
          <h2 {...props} className={classNames(className)}>
            <button type='button' onClick={onClick}>
              <span className={styles['section-title-text']}>
                {children} <LinkIcon className='inline h-6 text-indigo-200' />
              </span>
            </button>
          </h2>
        </a>
      </Link>
    </div>
  ),
);
