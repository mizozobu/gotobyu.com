import { PhotographIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';

/**
 * Props for {@link ImageLoader}
 */
interface Props extends ComponentPropsWithoutRef<'div'> {}

/**
 * Loader for image
 */
export const ImageLoader = ({ className, ...props }: Props) => (
  <div
    className={classNames(
      className,
      'flex h-full w-full animate-pulse items-center justify-center rounded-xl bg-slate-200',
    )}
    {...props}
  >
    <PhotographIcon className='h-8 w-8 text-slate-400' />
  </div>
);
