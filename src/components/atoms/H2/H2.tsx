import classNames from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './H2.module.css';

/**
 * Props for {@link H2}
 */
interface Props extends ComponentPropsWithoutRef<'h2'> {}

/**
 * Styled `<h2>`
 */
export const H2 = ({ className, children, ...props }: Props) => (
  <h2 {...props} className={classNames(styles.h2, className)}>
    {children}
  </h2>
);
