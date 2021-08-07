import { FC, HTMLAttributes } from 'react';
import styles from './Mark.module.css';

export interface Props extends HTMLAttributes<HTMLSpanElement> {}

export const Mark: FC<Props> = ({ className = '', ...props }: Props) => (
  <strong {...props} className={classNames(styles.mark, className)} />
);
