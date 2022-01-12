import type { ComponentPropsWithoutRef } from 'react';
import styles from './H2.module.css';

interface Props extends ComponentPropsWithoutRef<'h2'> {}

export const H2 = ({ className, children, ...props }: Props) => (
  <h2 {...props} className={classNames(styles.h2, className)}>
    {children}
  </h2>
);
