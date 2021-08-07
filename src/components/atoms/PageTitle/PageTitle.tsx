import { FC, HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLHeadingElement> {}

export const PageTitle: FC<Props> = ({
  className = '',
  children,
  ...props
}: Props) => (
  <h1
    {...props}
    className={classNames('text-3xl md:text-5xl font-bold my-4', className)}
  >
    {children}
  </h1>
);
