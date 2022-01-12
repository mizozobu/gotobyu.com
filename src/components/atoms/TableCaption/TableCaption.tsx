import type { ComponentPropsWithoutRef } from 'react';
import styles from './TableCaption.module.css';

interface Props extends ComponentPropsWithoutRef<'span'> {}

export const TableCaption = ({ className = '', children, ...props }: Props) => (
  <caption className={classNames('py-1', styles['table-caption'])}>
    <span
      {...props}
      className={classNames('px-2 py-1 rounded-full bg-gray-100', className)}
    >
      {children}
    </span>
  </caption>
);
