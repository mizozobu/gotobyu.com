import type { ComponentPropsWithoutRef } from 'react';

interface Props extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
  icon: (props: ComponentPropsWithoutRef<'svg'>) => JSX.Element;
  name: string;
  detail: string;
}

export const PageCard = ({
  icon: Icon,
  name,
  detail,
  className = '',
  ...props
}: Props) => (
  <div
    {...props}
    className={classNames(
      'w-48 md:w-64 aspect-[3/4] rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-500 bg-gray-50 overflow-hidden',
      className,
    )}
  >
    <div className='w-full h-full'>
      <div className='flex items-center justify-center h-1/3 bg-indigo-50 text-indigo-900'>
        <Icon className='w-16 h-16' />
      </div>
      <div className='flex flex-col h-2/3 py-4 px-6 space-y-2'>
        <div className='flex items-center h-1/6 text-indigo-900 text-lg md:text-2xl text-bold truncate'>
          {name}
        </div>
        <div className='h-5/6 text-sm md:text-base overflow-auto'>{detail}</div>
      </div>
    </div>
  </div>
);
