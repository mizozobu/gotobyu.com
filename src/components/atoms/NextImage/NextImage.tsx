import Image, { ImageProps } from 'next/image';
import { FC, CSSProperties } from 'react';

export type Props = ImageProps & {
  id?: string;
  className?: string;
  style?: CSSProperties;
};

export const NextImage: FC<Props> = ({
  id,
  className = '',
  style = {},
  ...props
}: Props) => (
  <div id={id} className={classNames('relative', className)} style={style}>
    <Image {...props} />
  </div>
);
