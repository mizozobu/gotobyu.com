import { FC, ReactNode } from 'react';
import styles from './BorderDraw.module.css';

export interface Props {
  className?: string;
  borderColor: string;
  children: ReactNode;
}

export const BorderDraw: FC<Props> = ({
  className = '',
  borderColor,
  children,
}: Props) => (
  <>
    <div className={classNames(styles['border-draw'], className)}>
      {children}
    </div>
    <style jsx>{`
      .${styles['border-draw']} {
        --border-color: ${borderColor};
      }
    `}</style>
  </>
);
