import { FC, HTMLAttributes } from 'react';
import styles from './Container.module.css';

export interface Props
  extends HTMLAttributes<HTMLElementTagNameMap['article']> {}

export const Container: FC<Props> = ({ className = '', ...props }: Props) => (
  <article
    {...props}
    className={classNames(
      'max-w-prose px-8 mx-auto my-12',
      styles.prose,
      className,
    )}
  />
);
