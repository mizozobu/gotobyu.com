import { FC, HTMLAttributes } from 'react';
import styles from './Container.module.css';

export interface Props
  extends HTMLAttributes<HTMLElementTagNameMap['article']> {}

export const Container: FC<Props> = ({ className = '', ...props }: Props) => (
  <article
    {...props}
    className={classNames(
      'container mx-auto px-8 my-12',
      styles.prose,
      className,
    )}
  />
);
