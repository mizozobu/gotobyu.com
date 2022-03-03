import classNames from 'classnames';
import { ReactNode } from 'react';
import { BgRotate } from '@cmp/atoms/BgRotate';

interface Props {
  className?: string;
  colorClass: string;
  children: ReactNode;
}

export const BgRotateCard = ({ className, colorClass, children }: Props) => (
  <BgRotate
    className={classNames('aspect-[3/4] w-48 md:w-64', className)}
    colorClass={colorClass}
  >
    <div className='h-full w-full rounded-xl bg-gray-50 p-4 shadow-xl'>
      {children}
    </div>
  </BgRotate>
);
