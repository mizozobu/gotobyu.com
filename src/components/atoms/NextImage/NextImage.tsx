import classNames from 'classnames';
import Image, { type ImageProps } from 'next/image';
import type { CSSProperties } from 'react';

/**
 * Props for {@link ImageProps}
 */
export type Props = ImageProps & {
  /** id to pass */
  id?: string;
  /** className to pass */
  className?: string;
  /** style to pass */
  style?: CSSProperties;
};

/**
 * Next.js Image component with a wrapper for easy styling
 */
export const NextImage = ({
  id,
  className,
  style = {},
  ...props
}: Props): JSX.Element => (
  <div
    id={id}
    className={classNames('relative', className)}
    style={style}
    data-testid='NextImage'
  >
    <Image {...props} />
  </div>
);
