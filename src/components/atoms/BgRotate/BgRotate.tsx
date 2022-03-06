import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './BgRotate.module.css';

/**
 * Props for {@link BgRorate}
 */
interface Props {
  /** className to pass */
  className?: string;
  /** className to set color for the rotating background */
  colorClass: string;
  /** Component to add a rotating background to */
  children: ReactNode;
}

/**
 * Rotate background on hover
 */
export const BgRotate = ({
  className,
  colorClass,
  children,
}: Props): JSX.Element => (
  <div className={classNames('group relative', styles['bg-rotate'], className)}>
    <div
      className={classNames(
        'absolute h-full w-full rotate-6 rounded-xl shadow-xl transition duration-500 ease-in-out group-hover:rotate-12',
        colorClass,
      )}
    />
    {children}
  </div>
);
