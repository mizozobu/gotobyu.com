import { FC, ComponentProps } from 'react';
import styles from './UlCol.module.css';

export interface Props extends ComponentProps<'section'> {}

export const UlCol: FC<Props> = ({ className, children, ...props }: Props) => (
  <section {...props} className={classNames(styles.ulcol, className)}>
    {children}
  </section>
);
