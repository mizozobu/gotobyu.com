import type { ComponentPropsWithoutRef } from 'react';

export interface Props extends ComponentPropsWithoutRef<'div'> {}

export const SplitPane = ({ className = '', ...props }: Props) => (
  <div
    {...props}
    className={classNames('grid grid-cols-1 md:grid-cols-2', className)}
  />
);
