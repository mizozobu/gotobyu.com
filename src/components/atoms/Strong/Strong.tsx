import { FC, HTMLAttributes } from 'react';
import styles from './Strong.module.css';

export interface Props extends HTMLAttributes<HTMLSpanElement> {}

export const Strong: FC<Props> = ({ className = '', ...props }: Props) => (
  <strong {...props} className={classNames(styles.strong, className)} />
);
