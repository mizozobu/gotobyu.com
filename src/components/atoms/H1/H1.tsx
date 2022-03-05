import classNames from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './H1.module.css';

/**
 * Props for H1
 */
interface Props extends ComponentPropsWithoutRef<'h1'> {}

/**
 * Styled `<h1>`
 */
export const H1 = ({ className, children, ...props }: Props) => (
  <h1 {...props} className={classNames(styles.h1, className)}>
    {children}
  </h1>
);
