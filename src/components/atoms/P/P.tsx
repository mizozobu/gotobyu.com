import type { ComponentPropsWithoutRef } from 'react';
import styles from './P.module.css';

interface Props extends ComponentPropsWithoutRef<'p'> {}

export const P = ({ className, children, ...props }: Props) => (
  <p {...props} className={classNames(styles.p, className)}>
    {children}
  </p>
);
