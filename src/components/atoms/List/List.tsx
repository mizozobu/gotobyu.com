import { FC, HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLUListElement> {
  title?: string;
}

export const List: FC<Props> = ({ className = '', title, ...props }: Props) => (
  <section className='clear-both'>
    {title ? <span className='font-bold'>{title}</span> : undefined}
    <ul
      {...props}
      className={classNames('list-disc list-inside ml-4', className)}
    />
  </section>
);
