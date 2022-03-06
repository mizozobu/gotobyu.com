import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { urlState } from '@s/url';

/**
 * Hook to use the current hash
 * @param id id to check if it's same as the the current hash
 * @returns Whether {@link id} is same as the the current hash and click event handler
 */
export const useAnchorLink = (id: string) => {
  const [{ hash }, setUrlState] = useRecoilState(urlState);

  const handleClick = useCallback(() => {
    if (navigator.clipboard && window.isSecureContext) {
      const { origin, pathname } = window.location;
      void navigator.clipboard.writeText(`${origin}${pathname}#${id}`);

      setUrlState((prevState) => ({
        ...prevState,
        showCopiedModal: true,
      }));
    }
  }, [id, setUrlState]);

  return {
    active: hash === id,
    handleClick,
  };
};
