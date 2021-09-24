import { FC, HTMLAttributes } from 'react';

export interface Props
  extends HTMLAttributes<HTMLElementTagNameMap['article']> {}

export const Container: FC<Props> = ({ className = '', ...props }: Props) => (
  <article
    {...props}
    className={classNames(
      'container mx-auto px-8 md:px-16 lg:px-32 mt-12 mb-12 md:mb-36 space-y-12 md:space-y-24',
      className,
    )}
  />
);
