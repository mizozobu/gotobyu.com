import classNames from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './TableCaption.module.css';

/**
 * Props for TableCaption
 */
interface Props extends ComponentPropsWithoutRef<'span'> {
  /** Description for screen reader */
  description?: string;
}

/**
 * Styled `<caption>` with screen reader support
 */
export const TableCaption = ({
  className,
  description,
  children,
  ...props
}: Props) => (
  <caption className={classNames('py-1', styles['table-caption'])}>
    <span
      {...props}
      className={classNames(className, 'rounded-full bg-gray-100 px-2 py-1')}
      aria-hidden='true'
      data-noindex='true'
    >
      {children}
    </span>
    <span className='sr-only'>{description ?? children}</span>
  </caption>
);
