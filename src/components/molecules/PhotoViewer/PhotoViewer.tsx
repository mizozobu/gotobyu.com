import { useState, FC } from 'react';
import Image, { ImageProps } from 'next/image';
import Slider, { Settings } from 'react-slick';
import { BgRotate } from '@c/atoms/BgRotate';
import styles from './PhotoViewer.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      if (current === next) return;
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
    <div className={styles['photo-viewer']}>
      <BgRotate className={className} colorClass={colorClass}>
        <Slider {...settings}>
          {images.map((imageProps) => (
            <div
              key={imageProps.alt}
              className={classNames(
                'relative aspect-[3/2] rounded-xl overflow-hidden',
              )}
            >
              <Image {...imageProps} />
            </div>
          ))}
        </Slider>
      </BgRotate>

      <div
        className={classNames(
          styles.citation,
          'mt-4 lg:mt-8 text-xs break-all transition-opacity',
          {
            'opacity-0': !showCitation,
          },
        )}
      >
        {images[i].citation && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};
