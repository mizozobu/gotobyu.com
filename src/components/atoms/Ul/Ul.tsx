import type { ComponentPropsWithoutRef } from 'react';
import styles from './Ul.module.css';

export interface Props extends ComponentPropsWithoutRef<'ul'> {}

export const Ul = ({ className, children, ...props }: Props) => (
  <ul {...props} className={classNames(styles.ul, className)}>
    {children}
  </ul>
);
