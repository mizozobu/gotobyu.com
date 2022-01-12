import type { ComponentPropsWithoutRef } from 'react';
import styles from './H1.module.css';

interface Props extends ComponentPropsWithoutRef<'h1'> {}

export const H1 = ({ className, children, ...props }: Props) => (
  <h1 {...props} className={classNames(styles.h1, className)}>
    {children}
  </h1>
);
