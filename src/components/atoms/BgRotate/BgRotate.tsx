import classNames from 'classnames';
import type { ComponentPropsWithoutRef, CSSProperties } from 'react';
import styles from './BgRotate.module.css';

/**
 * Props for {@link BgRotate}
 */
interface Props extends ComponentPropsWithoutRef<'div'> {
  /** style to pass */
  style: CSSProperties & {
    /** color for the rotating background */
    '--bg': CSSProperties['backgroundColor'];
  };
}

/**
 * Rotate background on hover
 */
export const BgRotate = ({
  className,
  style,
  children,
  ...props
}: Props): JSX.Element => (
  <div
    {...props}
    className={classNames(className, 'group relative')}
    style={style}
    data-testid='BgRotate'
  >
    <div
      className={classNames(
        styles['bg-rotate-bg'],
        'absolute h-full w-full rotate-6 rounded-xl shadow-xl transition duration-500 ease-in-out group-hover:rotate-12',
      )}
      aria-hidden
    />
    {children}
  </div>
);
