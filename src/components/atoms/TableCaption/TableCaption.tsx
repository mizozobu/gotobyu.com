import { HTMLAttributes } from 'react';
import styles from './TableCaption.module.css';

export interface Props extends HTMLAttributes<HTMLSpanElement> {}

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
