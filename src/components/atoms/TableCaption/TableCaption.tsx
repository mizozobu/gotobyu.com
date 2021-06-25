import { FC, HTMLAttributes } from 'react';
import styles from './TableCaption.module.css';

export interface Props extends HTMLAttributes<HTMLSpanElement> {}

export const TableCaption: FC<Props> = ({
  className = '',
  children,
  ...props
}: Props) => (
  <caption className={`py-1 ${styles['table-caption']}`}>
    <span
      {...props}
      className={`px-2 py-1 rounded-full text-gray-500 bg-gray-100 ${className}`}
    >
      {children}
    </span>
  </caption>
);
