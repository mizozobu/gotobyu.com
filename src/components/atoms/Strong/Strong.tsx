import classNames from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './Strong.module.css';

/**
 * Props for {@link Strong}
 */
interface Props extends ComponentPropsWithoutRef<'strong'> {}

/**
 * Styled `<strong>`
 */
export const Strong = ({ className, ...props }: Props): JSX.Element => (
  <strong {...props} className={classNames(styles.strong, className)} />
);
