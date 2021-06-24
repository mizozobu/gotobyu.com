import { FC, HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLSpanElement> {
  children: number;
}

export const Number: FC<Props> = ({ children, ...props }: Props) => (
  <span {...props}>{children.toLocaleString()}</span>
);
