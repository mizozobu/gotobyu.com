import classNames from 'classnames';
import { ReactNode } from 'react';
import { BgRotate } from '@c/atoms/BgRotate';

/**
 * Props for {@link BgRotateCard}
 */
interface Props {
  /** className to pass */
  className?: string;
  /** className to set color for the rotating background */
  colorClass: string;
  /** Card content */
  children: ReactNode;
}

/**
 * Card with rotating background
 */
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
