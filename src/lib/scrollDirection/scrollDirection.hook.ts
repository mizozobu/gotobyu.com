import { useEffect, useState } from 'react';
import { SCROLL_DIRECTION } from './scrollDirection.constants';
import type { ScrollDirectionType } from './scrollDirection.interface';

/**
 * Hook to use scroll direction
 * @returns Scroll direction
 */
export const useScrollDirection = ({
  threshold = 0,
}: {
  threshold: number;
}): ScrollDirectionType => {
  const [scrollDir, setScrollDir] = useState(SCROLL_DIRECTION.up);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = (): void => {
      const scrollY = window.pageYOffset;

      // debounce
      if (Math.abs(scrollY - lastScrollY) < threshold) return;

      setScrollDir(
        scrollY > lastScrollY ? SCROLL_DIRECTION.down : SCROLL_DIRECTION.up,
      );

      lastScrollY = Math.max(scrollY, 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrollDir;
};
