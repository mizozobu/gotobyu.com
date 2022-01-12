import { ComponentProps } from 'react';
import styles from './UlCol.module.css';

interface Props extends ComponentProps<'section'> {}

export const UlCol = ({ className, children, ...props }: Props) => (
  <section
    {...props}
    className={classNames('column-1 md:columns-2', styles.ulcol, className)}
  >
    {children}
  </section>
);
