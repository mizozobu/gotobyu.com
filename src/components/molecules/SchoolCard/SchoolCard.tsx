import { FC, ReactNode } from 'react';
import { BgRotate } from '@c/atoms/BgRotate';

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
  <BgRotate
    className={classNames('w-48 md:w-64 aspect-[3/4]', className)}
    colorClass={colorClass}
  >
    <div className='w-full h-full p-4 rounded-xl shadow-xl bg-gray-50'>
      {children}
    </div>
  </BgRotate>
);
