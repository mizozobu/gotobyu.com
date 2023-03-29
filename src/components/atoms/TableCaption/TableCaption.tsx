import classNames from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';

/**
 * Props for {@link TableCaption}
 */
interface Props extends ComponentPropsWithoutRef<'span'> {
  /** Description for screen reader */
  description?: string;
}

/**
 * Styled `<caption>` with screen reader support
 */
export const TableCaption = ({
  className,
  description,
  children,
  ...props
}: Props): JSX.Element => (
  <caption className='relative mt-4 caption-bottom whitespace-nowrap py-1 text-left text-xs md:text-right'>
    <span
      {...props}
      className={classNames(
        className,
        'mt-4 whitespace-nowrap rounded-full bg-gray-100 px-2 py-1 text-xs',
      )}
      aria-hidden='true'
      data-noindex='true'
    >
      {children}
    </span>
    <span className='sr-only'>{description ?? children}</span>
  </caption>
);
