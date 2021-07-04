import { FC, HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  id: string;
  active?: boolean;
}

export const TabPane: FC<Props> = ({
  active = false,
  className = '',
  ...props
}: Props) => (
  <div {...props} className={`${active ? 'block' : 'hidden'} ${className}`} />
);
