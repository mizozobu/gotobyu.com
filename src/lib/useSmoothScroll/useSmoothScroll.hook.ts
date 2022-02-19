import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { urlState } from '@s/url';

export const useSmoothScroll = (id: string) => {
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
