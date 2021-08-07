import { FC, CSSProperties } from 'react';
import Image, { ImageProps } from 'next/image';

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
