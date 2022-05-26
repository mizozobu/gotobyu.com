import classNames from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './Ul.module.css';

/**
 * Props for {@link Ul}
 */
interface Props extends ComponentPropsWithoutRef<'ul'> {}

/**
 * Styled `<ul>`
 */
export const Ul = ({ className, ...props }: Props): JSX.Element => (
  <ul {...props} className={classNames(styles.ul, className)} />
);
