import { FC, HTMLAttributes, ComponentProps } from 'react';
import { ArrowNarrowRightIcon } from '@heroicons/react/outline';
import styles from './PageCard.module.css';

export interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  icon: FC<ComponentProps<'svg'>>;
  name: string;
  detail: string;
}

export const PageCard: FC<Props> = ({
  icon: Icon,
  name,
  detail,
  className = '',
  ...props
}: Props) => (
  <div
    {...props}
    className={classNames(
      'w-48 h-64 md:w-64 md:h-80 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-500 bg-gray-50',
      styles['page-card'],
      className,
    )}
  >
    <div className='flex items-center justify-center h-1/3 rounded-t-xl bg-indigo-50 text-indigo-900'>
      <Icon className='w-16 h-16' />
    </div>
    <div className='flex flex-col justify-between h-2/3 py-4 px-6'>
      <div className='space-y-4'>
        <div className='text-indigo-900 text-lg md:text-2xl text-bold'>
          {name}
        </div>
        <div className='text-sm'>{detail}</div>
      </div>
      <div className={classNames('self-end', styles.arrow)}>
        <ArrowNarrowRightIcon className='w-6 h-6' />
      </div>
    </div>
  </div>
);
