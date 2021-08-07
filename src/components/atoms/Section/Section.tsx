import { FC, HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLElement> {
  id: string;
}

export const Section: FC<Props> = ({ className = '', ...props }: Props) => (
  <section
    {...props}
    className={classNames('space-y-8 leading-relaxed', className)}
  />
);
