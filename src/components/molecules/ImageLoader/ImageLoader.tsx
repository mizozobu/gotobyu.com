import { PhotoIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';

/**
 * Props for {@link ImageLoader}
 */
interface Props extends ComponentPropsWithoutRef<'div'> {}

/**
 * Loader for image
 */
export const ImageLoader = ({ className, ...props }: Props): JSX.Element => (
  <div
    className={classNames(
      className,
      'flex h-full w-full animate-pulse items-center justify-center rounded-xl bg-slate-200',
    )}
    role='progressbar'
    {...props}
  >
    <PhotoIcon className='h-8 w-8 text-slate-400' />
  </div>
);
