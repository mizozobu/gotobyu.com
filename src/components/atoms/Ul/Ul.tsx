import { HTMLAttributes } from 'react';
import styles from './Ul.module.css';

export interface Props extends HTMLAttributes<HTMLUListElement> {}

export const Ul = ({ className, children, ...props }: Props) => (
  <ul {...props} className={classNames(styles.ul, className)}>
    {children}
  </ul>
);
