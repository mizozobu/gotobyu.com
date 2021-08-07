import { FC, ReactNode } from 'react';
import styles from './DrawBorderButton.module.css';

export interface Props {
  className?: string;
  borderColor: string;
  children: ReactNode;
}

export const DrawBorderButton: FC<Props> = ({
  className = '',
  borderColor,
  children,
}: Props) => (
  <>
    <button
      type='button'
      className={classNames(
        'relative flex items-center justify-center rounded-full',
        styles.button,
        styles.spin,
        styles.circle,
        className,
      )}
    >
      {children}
    </button>
    <style jsx>{`
      .${styles.button} {
        --border-color: ${borderColor};
      }
    `}</style>
  </>
);
