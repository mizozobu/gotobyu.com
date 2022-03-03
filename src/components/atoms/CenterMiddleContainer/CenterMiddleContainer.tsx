import classNames from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';

interface Props extends ComponentPropsWithoutRef<'div'> {}

export const CenterMiddleContainer = ({
  className,
  children,
  ...props
}: Props) => (
  <div
    className={classNames(
      className,
      'flex h-full grow flex-col items-center justify-center',
    )}
    {...props}
  >
    {children}
  </div>
);
