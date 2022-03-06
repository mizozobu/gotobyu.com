import { useEffect, useRef } from 'react';

/**
 * Hook to use previous value
 * @param value Value to keep previous value
 * @returns Previous value
 */
export const usePrevious = <T>(value: T): T | undefined => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
