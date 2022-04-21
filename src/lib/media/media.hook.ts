import { useEffect, useState } from 'react';
import type { ScreenSize } from './media.interface';
import { mediaGte } from './media.util';

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
