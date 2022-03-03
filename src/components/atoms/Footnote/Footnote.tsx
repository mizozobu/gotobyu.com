import classNames from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './Footnote.module.css';

interface Props extends ComponentPropsWithoutRef<'li'> {}

export const Footnote = ({ className, children, ...props }: Props) => (
  <li {...props} className={classNames(styles.footnote, className)}>
    {children}
  </li>
);
