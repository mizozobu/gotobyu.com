import classNames from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';

/**
 * Props for {@link SplitPane}
 */
interface Props extends ComponentPropsWithoutRef<'div'> {}

/**
 * Split horizontally based on the screen size.
 * - \< sm: no split
 * - \>= md: split
 */
export const SplitPane = ({ className, ...props }: Props): JSX.Element => (
  <div
    {...props}
    className={classNames('grid grid-cols-1 md:grid-cols-2', className)}
  />
);
