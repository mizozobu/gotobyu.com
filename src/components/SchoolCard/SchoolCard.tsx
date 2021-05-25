import { FC, ReactNode } from 'react';
import styles from './SchoolCard.module.css';

export interface Props {
  className?: string;
  colorClass: string;
  children: ReactNode;
}

export const SchoolCard: FC<Props> = ({
  className = '',
  colorClass,
  children,
}: Props) => (
  <>
    <div className={`relative group ${styles['school-card']} ${className}`}>
      <div
        className={`absolute w-full h-full rounded-xl shadow-xl bg-red-500 transform rotate-6 group-hover:rotate-12 transition duration-500 ease-in-out ${colorClass}`}
      />
      <div className='w-full h-full p-4 rounded-xl shadow-xl bg-gray-50 group-hover:rotate-12'>
        {children}
      </div>
    </div>
  </>
);
