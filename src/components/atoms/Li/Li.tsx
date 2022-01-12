import type { ComponentPropsWithoutRef } from 'react';
import styles from './Li.module.css';

interface Props extends ComponentPropsWithoutRef<'li'> {}

export const Li = ({ className, children, ...props }: Props) => (
  <li {...props} className={classNames(styles.li, className)}>
    {children}
  </li>
);
