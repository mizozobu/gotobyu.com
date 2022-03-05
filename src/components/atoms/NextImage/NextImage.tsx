import classNames from 'classnames';
import Image, { ImageProps } from 'next/image';
import { CSSProperties } from 'react';

/**
 * Props for ImageProps
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
export const NextImage = ({ id, className, style = {}, ...props }: Props) => (
  <div id={id} className={classNames('relative', className)} style={style}>
    <Image {...props} />
  </div>
);
