import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {}

export const SplitPane = ({ className = '', ...props }: Props) => (
  <div
    {...props}
    className={classNames('grid grid-cols-1 md:grid-cols-2', className)}
  />
);
