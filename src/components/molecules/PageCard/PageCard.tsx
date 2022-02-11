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
      'aspect-[3/4] w-48 overflow-hidden rounded-xl bg-gray-50 shadow-xl transition-shadow duration-500 hover:shadow-2xl md:w-64',
      className,
    )}
  >
    <div className='h-full w-full'>
      <div className='flex h-1/3 items-center justify-center bg-indigo-50 text-indigo-900'>
        <Icon className='h-16 w-16' />
      </div>
      <div className='flex h-2/3 flex-col space-y-2 py-4 px-6'>
        <div className='text-bold flex h-1/6 items-center truncate text-lg text-indigo-900 md:text-2xl'>
          {name}
        </div>
        <div className='h-5/6 overflow-auto text-sm md:text-base'>{detail}</div>
      </div>
    </div>
  </div>
);
