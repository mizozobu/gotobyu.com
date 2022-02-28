import type { ComponentPropsWithoutRef } from 'react';
import styles from './MdxContainer.module.css';

interface Props extends ComponentPropsWithoutRef<'article'> {}

export const MdxContainer = ({ className, ...props }: Props) => (
  <article
    {...props}
    className={classNames(
      'mx-auto my-12 max-w-6xl px-4 sm:px-6',
      styles.prose,
      className,
    )}
  />
);
