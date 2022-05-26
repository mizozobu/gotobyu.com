import classNames from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './BgRotate.module.css';

/**
 * Props for {@link BgRorate}
 */
interface Props extends ComponentPropsWithoutRef<'div'> {
  /** className to set color for the rotating background */
  colorClass: string;
}

/**
 * Rotate background on hover
 */
export const BgRotate = ({
  className,
  colorClass,
  children,
  ...props
}: Props): JSX.Element => (
  <div
    {...props}
    className={classNames('group relative', styles['bg-rotate'], className)}
    data-testid='BgRotate'
  >
    <div
      className={classNames(
        'absolute h-full w-full rotate-6 rounded-xl shadow-xl transition duration-500 ease-in-out group-hover:rotate-12',
        colorClass,
      )}
      aria-hidden
      data-testid='BgRotate-bg'
    />
    {children}
  </div>
);
