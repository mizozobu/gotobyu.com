import classNames from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './P.module.css';

/**
 * Props for P
 */
interface Props extends ComponentPropsWithoutRef<'p'> {}

/**
 * Styled `<p>`
 */
export const P = ({ className, children, ...props }: Props) => (
  <p {...props} className={classNames(styles.p, className)}>
    {children}
  </p>
);
