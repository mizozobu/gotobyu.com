import { FC, HTMLAttributes } from 'react';
import styles from './H3.module.css';

export interface Props extends HTMLAttributes<HTMLHeadingElement> {}

export const H3: FC<Props> = ({ className, children, ...props }: Props) => (
  <h3 {...props} className={classNames(styles.h3, className)}>
    {children}
  </h3>
);
