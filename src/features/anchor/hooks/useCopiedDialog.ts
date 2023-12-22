import { useCallback, useEffect, useState, useRef } from 'react';
import { URL_COPY_EVENT } from '../constants';

declare global {
  interface WindowEventMap {
    [URL_COPY_EVENT]: CustomEvent<boolean>;
  }
}

/**
 * Use globally synced copied dialog
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useCopiedDialog = () => {
  const [isCopiedDialogOpen, setIsCopiedDialogOpen] = useState(false);
  const timeoutRef = useRef<number>();

  /**
   * Copied dialog toogle change event handler
   */
  const onCopiedDialogToggle = useCallback((e: CustomEvent<boolean>) => {
    setIsCopiedDialogOpen(e.detail);
  }, []);

  /**
   * Close copied dialog
   */
  const closeCopiedDialog = useCallback(() => {
    window.dispatchEvent(new CustomEvent(URL_COPY_EVENT, { detail: false }));
  }, []);

  /**
   * Open copied dialog
   */
  const openCopiedDialog = useCallback(() => {
    window.dispatchEvent(new CustomEvent(URL_COPY_EVENT, { detail: true }));
    timeoutRef.current = window.setTimeout(closeCopiedDialog, 1200);
  }, []);

  useEffect(() => {
    window.addEventListener(URL_COPY_EVENT, onCopiedDialogToggle);

    return () => {
      window.removeEventListener(URL_COPY_EVENT, closeCopiedDialog);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return {
    isCopiedDialogOpen,
    openCopiedDialog,
    closeCopiedDialog,
  };
};
