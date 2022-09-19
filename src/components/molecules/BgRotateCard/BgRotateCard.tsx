import classNames from 'classnames';
import type { ReactNode, ComponentPropsWithoutRef } from 'react';
import { BgRotate } from '@/components/atoms/BgRotate';

/**
 * Props for {@link BgRotateCard}
 */
interface Props extends ComponentPropsWithoutRef<typeof BgRotate> {
  /** className to pass */
  className?: string;
  /** Card content */
  children: ReactNode;
}

/**
 * Card with rotating background
 */
export const BgRotateCard = ({
  className,
  children,
  ...props
}: Props): JSX.Element => (
  <BgRotate
    className={classNames('aspect-[3/4] w-48 md:w-64', className)}
    {...props}
  >
    <div className='h-full w-full rounded-xl bg-gray-50 p-4 shadow-xl'>
      {children}
    </div>
  </BgRotate>
);
