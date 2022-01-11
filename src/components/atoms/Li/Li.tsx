import { HTMLAttributes } from 'react';
import styles from './Li.module.css';

export interface Props extends HTMLAttributes<HTMLLIElement> {}

export const Li = ({ className, children, ...props }: Props) => (
  <li {...props} className={classNames(styles.li, className)}>
    {children}
  </li>
);
