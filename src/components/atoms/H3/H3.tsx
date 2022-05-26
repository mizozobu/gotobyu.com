import classNames from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';
import styles from '@c/atoms/H4/H4.module.css'; // use h4 styles

/**
 * Props for {@link H3}
 */
interface Props extends ComponentPropsWithoutRef<'h3'> {}

/**
 * Styled `<h3>`
 */
export const H3 = ({ className, children, ...props }: Props): JSX.Element => (
  <h3 {...props} className={classNames(styles.h4, className)}>
    {children}
  </h3>
);
