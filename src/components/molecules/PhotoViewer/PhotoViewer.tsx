import { useState, FC } from 'react';
import Image, { ImageProps } from 'next/image';
import Slider, { Settings } from 'react-slick';
import { BgRotate } from '@c/atoms/BgRotate';
import styles from './PhotoViewer.module.css';
import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';

export interface Props {
  images: (ImageProps & { alt: string; citation?: string })[];
  className?: string;
  colorClass: string;
  settings?: Settings;
}

export const PhotoViewer: FC<Props> = ({
  images,
  className = '',
  colorClass,
  settings: _settings = {},
}: Props) => {
  const [i, setI] = useState(0);
  const [showCitation, setShowCitation] = useState(true);

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnDotsHover: true,
    ..._settings,
    beforeChange: (current: number, next: number) => {
      setShowCitation(false);
      _settings.beforeChange?.(current, next);
    },
    afterChange: (current: number) => {
      setShowCitation(true);
      setI(current);
      _settings.afterChange?.(current);
    },
  };

  return (
    <div
      className={classNames(styles['photo-viewer'], 'w-full md:w-80 lg:w-96')}
    >
      <BgRotate className={className} colorClass={colorClass}>
        <Slider {...settings}>
          {images.map((imageProps) => (
            <div
              key={imageProps.alt}
              className={classNames('aspect-w-3 aspect-h-2')}
            >
              <Image {...imageProps} />
            </div>
          ))}
        </Slider>
      </BgRotate>

      <div
        className={classNames(
          styles.citation,
          'mt-4 text-xs break-all transition-opacity',
          {
            'opacity-0': !showCitation,
          },
        )}
      >
        引用元:{' '}
        <cite>
          <a
            href={images[i].citation}
            target='_blank'
            rel='noreferrer'
            className='text-indigo-600'
          >
            {images[i].citation}
          </a>
        </cite>
      </div>
    </div>
  );
};
