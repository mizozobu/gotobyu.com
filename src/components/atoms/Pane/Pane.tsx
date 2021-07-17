import { FC, HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Pane: FC<Props> = ({ className = '', ...props }: Props) => (
  <div {...props} className={`px-0 md:px-6 lg:px-12 ${className}`} />
);
