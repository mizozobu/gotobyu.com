import classNames from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './Footnote.module.css';

/**
 * Props for {@link Footnote}
 */
interface Props extends ComponentPropsWithoutRef<'li'> {}

/**
 * `<li>` with "*". Used for annotations for a chart or a table
 */
export const Footnote = ({
  className,
  children,
  ...props
}: Props): JSX.Element => (
  <li {...props} className={classNames(styles.footnote, className)}>
    {children}
  </li>
);
