import { FC, HTMLAttributes } from 'react';
import styles from './H2.module.css';

export interface Props extends HTMLAttributes<HTMLHeadingElement> {}

export const H2: FC<Props> = ({ className, children, ...props }: Props) => (
  <h2 {...props} className={classNames(styles.h2, className)}>
    {children}
  </h2>
);
