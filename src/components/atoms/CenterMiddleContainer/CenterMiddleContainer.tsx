import classNames from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';

/**
 * Props for {@link CenterMiddleContainer}
 */
interface Props extends ComponentPropsWithoutRef<'div'> {}

/**
 * Container to center content vertically and horizontally in a page
 */
export const CenterMiddleContainer = ({
  className,
  ...props
}: Props): JSX.Element => (
  <div
    className={classNames(
      className,
      'flex h-full grow flex-col items-center justify-center',
    )}
    {...props}
  />
);
