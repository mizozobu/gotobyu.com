import { FC, HTMLAttributes } from 'react';
import styles from './H1.module.css';

export interface Props extends HTMLAttributes<HTMLHeadingElement> {}

export const H1: FC<Props> = ({ className, children, ...props }: Props) => (
  <h1 {...props} className={classNames(styles.h1, className)}>
    {children}
  </h1>
);
