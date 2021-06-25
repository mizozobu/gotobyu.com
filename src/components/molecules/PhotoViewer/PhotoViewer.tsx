import { useState, FC, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { BgRotate } from '@c/atoms/BgRotate';
import styles from './PhotoViewer.module.css';

export interface Props {
  images: ImageProps[];
  className?: string;
  colorClass: string;
}

export const PhotoViewer: FC<Props> = ({
  images: _images,
  className = '',
  colorClass,
}: Props) => {
  const getInitialImageArray = (items: ImageProps[]): ImageProps[] => {
    let imagePropsWithId = items;
    if (items.length === 1) {
      imagePropsWithId = [
        items[0],
        { ...items[0], alt: `${items[0].alt ?? ''} 2` },
        { ...items[0], alt: `${items[0].alt ?? ''} 3` },
      ];
    } else if (items.length === 2) {
      imagePropsWithId = [
        items[0],
        items[1],
        { ...items[0], alt: `${items[0].alt ?? ''} 2` },
        { ...items[1], alt: `${items[1].alt ?? ''} 2` },
      ];
    }

    return imagePropsWithId;
  };
  const imageDeck = getInitialImageArray(_images);

  const [images, setImages] = useState(imageDeck.slice(0, 3));
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const total = imageDeck.length;
      const newCurrent = (total + current + 1) % total;

      setCurrent(newCurrent);
      const [, ...remainingImages] = images;
      setImages([...remainingImages, imageDeck[current]]);
    }, 5000);
    return () => clearInterval(interval);
  }, [current, images, imageDeck]);

  const getTranslateClassName = (i: number): string => {
    if (i === 0) return '-translate-x-full';
    if (i === 1) return 'translate-x-0';
    if (i === 2) return 'translate-x-full';
    return '';
  };

  return (
    <BgRotate
      className={`${styles['photo-viewer']} ${className}`}
      colorClass={colorClass}
    >
      <div className='relative overflow-hidden rounded-xl'>
        {images.map((imageProps, i) => (
          <div
            key={imageProps.alt}
            className={`absolute inset-0 ${
              _images.length > 1
                ? `transform transition-transform ease-in-out duration-1000 ${getTranslateClassName(
                    i,
                  )}`
                : ''
            }`}
          >
            <Image {...imageProps} />
          </div>
        ))}
      </div>
    </BgRotate>
  );
};
