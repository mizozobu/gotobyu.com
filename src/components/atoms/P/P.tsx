import { FC, HTMLAttributes } from 'react';
import styles from './P.module.css';

export interface Props extends HTMLAttributes<HTMLParagraphElement> {}

export const P: FC<Props> = ({ className, children, ...props }: Props) => (
  <p {...props} className={classNames(styles.p, className)}>
    {children}
  </p>
);
