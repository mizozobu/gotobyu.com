import type { ComponentPropsWithoutRef } from 'react';
import styles from '@cmp/atoms/H4/H4.module.css'; // use styles for h4 instead

interface Props extends ComponentPropsWithoutRef<'h3'> {}

export const H3 = ({ className, children, ...props }: Props) => (
  <h3 {...props} className={classNames(styles.h4, className)}>
    {children}
  </h3>
);
