import classNames from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';

/**
 * Props for SplitPane
 */
interface Props extends ComponentPropsWithoutRef<'div'> {}

/**
 * Split horizontally based on the screen size.
 * - \< sm: no split
 * - \>= md: split
 */
export const SplitPane = ({ className, ...props }: Props) => (
  <div
    {...props}
    className={classNames('grid grid-cols-1 md:grid-cols-2', className)}
  />
);
