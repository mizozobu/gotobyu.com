import classNames from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';
import type { IconComponentType } from '@/types/icon';

/**
 * Props for {@link PageCard}
 */
interface Props extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
  /** Card icon */
  icon: IconComponentType;
  /** Card title */
  name: string;
  /** Card description */
  detail: string;
}

/**
 * Card for a page
 */
export const PageCard = ({
  icon: Icon,
  name,
  detail,
  className,
  ...props
}: Props): JSX.Element => (
  <div
    {...props}
    className={classNames(
      'aspect-[3/4] w-48 overflow-hidden rounded-xl bg-gray-50 shadow-xl transition-shadow duration-500 hover:shadow-2xl md:w-64',
      className,
    )}
  >
    <div className='h-full w-full'>
      <div className='flex h-1/3 items-center justify-center bg-indigo-50 text-indigo-900'>
        <Icon className='h-16 w-16' />
      </div>
      <div className='flex h-2/3 flex-col space-y-2 px-6 py-4'>
        <div className='text-bold flex h-1/6 items-center truncate text-lg text-indigo-900 md:text-2xl'>
          {name}
        </div>
        <div className='h-5/6 overflow-auto text-sm md:text-base'>{detail}</div>
      </div>
    </div>
  </div>
);
