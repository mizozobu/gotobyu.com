import classNames from 'classnames';
import { ReactNode } from 'react';
import { Style } from '@c/atoms/Style';
import styles from './BorderDraw.module.css';

/**
 * Props for BorderDraw
 */
interface Props {
  /** className to pass */
  className?: string;
  /** Border color */
  borderColor: string;
  /** Component to add a border to  */
  children: ReactNode;
}

/**
 *  Drawing effect border
 */
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
