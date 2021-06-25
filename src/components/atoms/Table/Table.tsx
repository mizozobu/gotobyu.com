import { FC, HTMLAttributes } from 'react';
import styles from './Table.module.css';

export interface Props extends HTMLAttributes<HTMLTableElement> {}

export const Table: FC<Props> = ({ className = '', ...props }: Props) => (
  <div className={`rounded-md overflow-x-auto ${className}`}>
    <table {...props} className={`min-w-full table-auto ${styles.table}`} />
  </div>
);
