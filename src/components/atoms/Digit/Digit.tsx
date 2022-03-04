import type { ComponentPropsWithoutRef } from 'react';
import { round } from '@l/round';

interface Props extends ComponentPropsWithoutRef<'span'> {
  children: number;
  decimals?: number;
}

export const Digit = ({ children, decimals = 0, ...props }: Props) => (
  <span {...props}>{round(children, decimals).toLocaleString()}</span>
);
