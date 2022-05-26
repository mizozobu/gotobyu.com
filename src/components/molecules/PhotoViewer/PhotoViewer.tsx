import classNames from 'classnames';
import { type ImageProps } from 'next/image';
import { useState } from 'react';
import Slider, { type Settings } from 'react-slick';
import { BgRotate } from '@c/atoms/BgRotate';
import { NextImage } from '@c/atoms/NextImage';
import styles from './PhotoViewer.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/**
 * Props for {@link PhotoViewer}
 */
export interface Props {
  /** Array of Next.js images with "alt" attr and optional citation  */
  images: (ImageProps & { alt: string; citation?: string })[];
  /** className to pass */
  className?: string;
  /** className to set color for the rotating background */
  colorClass: string;
  /** react-slick settings */
  settings?: Settings;
}

/**
 * Slider for images
 */
export const PhotoViewer = ({
  images,
  className,
  colorClass,
  settings: _settings = {},
}: Props): JSX.Element => {
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
    <div className={styles['photo-viewer']} data-noindex='true'>
      <BgRotate className={className} colorClass={colorClass}>
        <Slider {...settings}>
          {images.map((imageProps) => (
            <NextImage
              key={imageProps.alt}
              className={classNames(
                'relative aspect-[3/2] overflow-hidden rounded-xl',
              )}
              {...imageProps}
            />
          ))}
        </Slider>
      </BgRotate>

      <div
        className={classNames(
          styles.citation,
          'mt-4 break-all text-xs transition-opacity lg:mt-8',
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
