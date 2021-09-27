import { FC, HTMLAttributes } from 'react';

export interface Props
  extends HTMLAttributes<HTMLElementTagNameMap['article']> {}

export const Container: FC<Props> = ({ className = '', ...props }: Props) => (
  <article
    {...props}
    className={classNames(
      'container mx-auto prose prose-sm md:prose lg:prose-lg px-8 my-12',
      className,
    )}
  />
);
