import type { ComponentPropsWithoutRef } from 'react';
import { round } from '@l/round';

/**
 * Props for Digit
 */
interface Props extends ComponentPropsWithoutRef<'span'> {
  /** Digit */
  children: number;
  /** Decimal places to round to */
  decimals?: number;
}

/**
 * Round a number and display with commas
 */
export const Digit = ({ children, decimals = 0, ...props }: Props) => (
  <span {...props}>{round(children, decimals).toLocaleString()}</span>
);
