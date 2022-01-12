import type { ComponentPropsWithoutRef } from 'react';
import styles from './Strong.module.css';

export interface Props extends ComponentPropsWithoutRef<'strong'> {}

export const Strong = ({ className = '', ...props }: Props) => (
  <strong {...props} className={classNames(styles.strong, className)} />
);
