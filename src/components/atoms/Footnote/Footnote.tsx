import { HTMLAttributes } from 'react';
import styles from './Footnote.module.css';

export interface Props extends HTMLAttributes<HTMLLIElement> {}

export const Footnote = ({ className, children, ...props }: Props) => (
  <li {...props} className={classNames(styles.footnote, className)}>
    {children}
  </li>
);
