import classNames from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './UlCol.module.css';

/**
 * Props for {@link UlCol}
 */
interface Props extends ComponentPropsWithoutRef<'section'> {}

/**
 * Multiline `<ul>` to break at a right place
 */
export const UlCol = ({
  className,
  children,
  ...props
}: Props): JSX.Element => (
  <section
    {...props}
    className={classNames('column-1 md:columns-2', styles.ulcol, className)}
  >
    {children}
  </section>
);
