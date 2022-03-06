import classNames from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';

/**
 * Props for {@link Pane}
 */
interface Props extends ComponentPropsWithoutRef<'div'> {}

/**
 * Pane in SplitPane
 */
export const Pane = ({ className, ...props }: Props) => (
  <div {...props} className={classNames('px-0 md:px-6 lg:px-12', className)} />
);
