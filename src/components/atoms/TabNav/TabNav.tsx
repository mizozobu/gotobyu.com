import { FC, HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  id: string;
  active?: boolean;
}

export const TabNav: FC<Props> = ({
  className = '',
  active = false,
  ...props
}: Props) => (
  <div
    {...props}
    role='button'
    tabIndex={0}
    className={classNames(
      'border rounded-t-xl',
      className,
      active ? 'border-b-0 -mt-2 -mb-px' : 'border-b-1 bg-gray-50',
    )}
  />
);
