import type { ComponentPropsWithoutRef } from 'react';
import styles from './TableCaption.module.css';

interface Props extends ComponentPropsWithoutRef<'span'> {
  description?: string;
}

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
      data-noindex='true'
    >
      {children}
    </span>
    <span className='sr-only'>{description ?? children}</span>
  </caption>
);
