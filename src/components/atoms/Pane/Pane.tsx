import type { ComponentPropsWithoutRef } from 'react';

export interface Props extends ComponentPropsWithoutRef<'div'> {}

export const Pane = ({ className = '', ...props }: Props) => (
  <div {...props} className={classNames('px-0 md:px-6 lg:px-12', className)} />
);
