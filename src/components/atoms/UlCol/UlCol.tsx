import classNames from 'classnames';
import { ComponentProps } from 'react';
import styles from './UlCol.module.css';

/**
 * Props for UlCol
 */
interface Props extends ComponentProps<'section'> {}

/**
 * Multiline `<ul>` to break at a right place
 */
export const UlCol = ({ className, children, ...props }: Props) => (
  <section
    {...props}
    className={classNames('column-1 md:columns-2', styles.ulcol, className)}
  >
    {children}
  </section>
);
