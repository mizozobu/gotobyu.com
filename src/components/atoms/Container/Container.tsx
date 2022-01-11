import { HTMLAttributes } from 'react';
import styles from './Container.module.css';

export interface Props
  extends HTMLAttributes<HTMLElementTagNameMap['article']> {}

export const Container = ({ className = '', ...props }: Props) => (
  <article
    {...props}
    className={classNames(
      'max-w-6xl px-4 sm:px-6 mx-auto my-12',
      styles.prose,
      className,
    )}
  />
);
