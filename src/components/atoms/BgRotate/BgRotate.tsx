import { ReactNode } from 'react';
import styles from './BgRotate.module.css';

export interface Props {
  className?: string;
  colorClass: string;
  children: ReactNode;
}

export const BgRotate = ({ className = '', colorClass, children }: Props) => (
  <div className={classNames('relative group', styles['bg-rotate'], className)}>
    <div
      className={classNames(
        'absolute w-full h-full rounded-xl shadow-xl rotate-6 group-hover:rotate-12 transition duration-500 ease-in-out',
        colorClass,
      )}
    />
    {children}
  </div>
);
