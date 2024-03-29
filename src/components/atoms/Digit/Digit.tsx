import type { ComponentPropsWithoutRef } from 'react';
import { round } from '@/utils/round';

/**
 * Props for {@link Digit}
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
export const Digit = ({
  children,
  decimals = 0,
  ...props
}: Props): JSX.Element => (
  <span {...props}>{round(children, decimals).toLocaleString()}</span>
);
