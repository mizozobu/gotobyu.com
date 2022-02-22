import { ReactNode } from 'react';
import { Style } from '@cmp/atoms/Style';
import styles from './BorderDraw.module.css';

interface Props {
  className?: string;
  borderColor: string;
  children: ReactNode;
}

export const BorderDraw = ({ className, borderColor, children }: Props) => (
  <>
    <div className={classNames(styles['border-draw'], className)}>
      {children}
    </div>
    <Style
      selector={`.${styles['border-draw']}`}
      styles={{
        '--border-color': borderColor,
      }}
    />
  </>
);
