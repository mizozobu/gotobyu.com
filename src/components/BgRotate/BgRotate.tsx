import { FC, ReactNode } from 'react';
import styles from './BgRotate.module.css';

export interface Props {
  className?: string;
  colorClass: string;
  children: ReactNode;
}

export const BgRotate: FC<Props> = ({
  className = '',
  colorClass,
  children,
}: Props) => (
  <>
    <div className={`relative group ${styles['bg-rotate']} ${className}`}>
      <div
        className={`absolute w-full h-full rounded-xl shadow-xl transform rotate-6 group-hover:rotate-12 transition duration-500 ease-in-out ${colorClass}`}
      />
      {children}
    </div>
  </>
);
