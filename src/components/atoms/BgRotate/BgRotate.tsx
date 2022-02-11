import { ReactNode } from 'react';
import styles from './BgRotate.module.css';

interface Props {
  className?: string;
  colorClass: string;
  children: ReactNode;
}

export const BgRotate = ({ className = '', colorClass, children }: Props) => (
  <div className={classNames('group relative', styles['bg-rotate'], className)}>
    <div
      className={classNames(
        'absolute h-full w-full rotate-6 rounded-xl shadow-xl transition duration-500 ease-in-out group-hover:rotate-12',
        colorClass,
      )}
    />
    {children}
  </div>
);
