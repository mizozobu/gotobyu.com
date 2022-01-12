import type { ComponentPropsWithoutRef } from 'react';

export interface Props extends ComponentPropsWithoutRef<'span'> {
  children: number;
  decimals?: number;
}

export const Digit = ({ children, decimals = 0, ...props }: Props) => (
  <span {...props}>
    {(
      Math.round((children + Number.EPSILON) * 10 ** decimals) /
      10 ** decimals
    ).toLocaleString()}
  </span>
);
