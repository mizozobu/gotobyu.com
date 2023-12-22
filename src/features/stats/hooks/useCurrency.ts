import { useCallback, useEffect, useState } from 'react';
import { CURRENCY_CHANGE_EVENT } from '../constants';

/**
 * Use globally synced currency
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useCurrency = () => {
  const [isJPY, setIsJPY] = useState(false);

  /**
   * Currency change event handler
   */
  const onCurrencyChange = useCallback(() => {
    setIsJPY((prev) => !prev);
  }, []);

  /**
   * Change currency globally
   */
  const changeCurrency = useCallback(() => {
    window.dispatchEvent(new CustomEvent(CURRENCY_CHANGE_EVENT));
  }, []);

  useEffect(() => {
    window.addEventListener(CURRENCY_CHANGE_EVENT, onCurrencyChange);
    return () => {
      window.removeEventListener(CURRENCY_CHANGE_EVENT, onCurrencyChange);
    };
  }, [onCurrencyChange]);

  return {
    isJPY,
    changeCurrency,
  };
};
