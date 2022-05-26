import classNames from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './Li.module.css';

/**
 * Props for {@link Li}
 */
interface Props extends ComponentPropsWithoutRef<'li'> {}

/**
 * Styled `<li>`
 */
export const Li = ({ className, ...props }: Props): JSX.Element => (
  <li {...props} className={classNames(styles.li, className)} />
);
