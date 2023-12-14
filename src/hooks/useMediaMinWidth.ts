'use client';

import { useEffect, useState } from 'react';

/**
 * Type for screen size
 */
export type ScreenSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * Screen size
 * @see {@link https://tailwindcss.com/docs/responsive-design}
 */
export const SCREEN: { [key in ScreenSize]: number } = {
  /** sm */
  sm: 640,
  /** md */
  md: 768,
  /** lg */
  lg: 1024,
  /** xl */
  xl: 1280,
  /** 2xl */
  '2xl': 1536,
};

export const mediaGte = (size: ScreenSize): boolean =>
  window.matchMedia(`(min-width: ${SCREEN[size]}px)`).matches;

/**
 * Hook that returns whether the given screen size is greater than or equal to window size
 * @param size Screen size
 * @returns Whether the media query for the screen size is applied
 */
export const useMediaMinWidth = (size: ScreenSize): boolean => {
  const [isMatched, setIsMatched] = useState(false);

  useEffect(() => {
    const handleResize = (): void => setIsMatched(mediaGte(size));

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [size]);

  return isMatched;
};
