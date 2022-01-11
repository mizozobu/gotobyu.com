import { HTMLAttributes } from 'react';
import styles from './Strong.module.css';

export interface Props extends HTMLAttributes<HTMLSpanElement> {}

export const Strong = ({ className = '', ...props }: Props) => (
  <strong {...props} className={classNames(styles.strong, className)} />
);
