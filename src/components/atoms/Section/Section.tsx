import { FC, HTMLAttributes } from 'react';
import styles from './Section.module.css';

export interface Props extends HTMLAttributes<HTMLElement> {
  id: string;
}

export const Section: FC<Props> = ({ className = '', ...props }: Props) => (
  <section
    {...props}
    className={classNames(
      'space-y-4 leading-relaxed',
      styles.section,
      className,
    )}
  />
);
