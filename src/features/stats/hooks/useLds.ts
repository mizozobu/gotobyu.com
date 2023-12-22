import { useCallback, useEffect, useState } from 'react';
import { LDS_CHANGE_EVENT } from '../constants';

/**
 * Use globally synced LDS status
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useLds = () => {
  const [isLds, setIsLds] = useState(false);

  /**
   * LDS status change event handler
   */
  const onLdsChange = useCallback(() => {
    setIsLds((prev) => !prev);
  }, []);

  /**
   * Change LDS status globally
   */
  const changeLds = useCallback(() => {
    window.dispatchEvent(new CustomEvent(LDS_CHANGE_EVENT));
  }, []);

  useEffect(() => {
    window.addEventListener(LDS_CHANGE_EVENT, onLdsChange);
    return () => {
      window.removeEventListener(LDS_CHANGE_EVENT, onLdsChange);
    };
  }, [onLdsChange]);

  return {
    isLds,
    changeLds,
  };
};
