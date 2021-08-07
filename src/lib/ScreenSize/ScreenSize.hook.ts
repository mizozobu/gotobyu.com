import { useState, useEffect } from 'react';
import { ScreenSize } from './ScreenSize.constants';
import type { ScreenSizeType } from './ScreenSize.interface';

export type ResizeHandler = (screenSize: ScreenSizeType) => void;

export const useScreenSize = (handler?: ResizeHandler): ScreenSizeType => {
  const [screenSize, setScreenSize] = useState<ScreenSizeType>(ScreenSize.sm);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let size: ScreenSizeType = ScreenSize.sm;

      if (width < 768) {
        size = ScreenSize.sm;
      } else if (width < 1024) {
        size = ScreenSize.md;
      } else if (width < 1280) {
        size = ScreenSize.lg;
      } else if (width < 1536) {
        size = ScreenSize.xl;
      } else {
        size = ScreenSize['2xl'];
      }

      setScreenSize(size);
      handler?.(size);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [handler]);

  return screenSize;
};
