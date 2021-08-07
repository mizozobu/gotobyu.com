import { FC, HTMLAttributes } from 'react';
import styles from './GradientText.module.css';

export interface Props extends HTMLAttributes<HTMLSpanElement> {
  start: string;
  stop: string;
}

export const GradientText: FC<Props> = ({
  className = '',
  start,
  stop,
  ...props
}: Props) => (
  <>
    <span
      {...props}
      className={classNames(styles['gradient-text'], className)}
    />
    <style jsx>{`
      .${styles['gradient-text']} {
        --start: ${start};
        --stop: ${stop};
      }
    `}</style>
  </>
);
