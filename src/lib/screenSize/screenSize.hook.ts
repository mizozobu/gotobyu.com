import { useState, useEffect } from 'react';
import { usePrevious } from '@l/usePrevious';
import { SCREEN_SIZE } from './screenSize.constants';
import type { ScreenSizeType } from './screenSize.interface';

export type ResizeHandler = (screenSize: ScreenSizeType) => void;

export const useScreenSize = (handler?: ResizeHandler): ScreenSizeType => {
  const [screenSize, setScreenSize] = useState<ScreenSizeType>(SCREEN_SIZE.sm);
  const prevScreenSize = usePrevious(screenSize);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let size: ScreenSizeType = SCREEN_SIZE.sm;

      if (width < 768) {
        size = SCREEN_SIZE.sm;
      } else if (width < 1024) {
        size = SCREEN_SIZE.md;
      } else if (width < 1280) {
        size = SCREEN_SIZE.lg;
      } else if (width < 1536) {
        size = SCREEN_SIZE.xl;
      } else {
        size = SCREEN_SIZE['2xl'];
      }

      if (prevScreenSize === size) return;

      setScreenSize(size);
      handler?.(size);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [handler, prevScreenSize]);

  return screenSize;
};
