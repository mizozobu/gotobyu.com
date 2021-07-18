import { FC, HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Container: FC<Props> = ({ className = '', ...props }: Props) => (
  <div
    {...props}
    className={`container mx-auto px-8 md:px-16 lg:px-32 my-8 space-y-12 md:space-y-24 ${className}`}
  />
);
