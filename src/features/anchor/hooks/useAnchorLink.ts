import {
  useEffect,
  useState,
  useCallback,
  type MouseEventHandler,
} from 'react';
import { useSetRecoilState } from 'recoil';
import { anchorState } from '@/features/anchor';

interface ReturnType {
  /** Whether the element is active */
  active: boolean;
  /** Click event handler */
  handleClick: MouseEventHandler<HTMLElement>;
}

/**
 * Hook to use the current hash
 * @param id id to check if it's same as the the current hash
 * @returns Whether {@link id} is same as the the current hash and click event handler
 */
export const useAnchorLink = (id: string): ReturnType => {
  const [active, setActive] = useState(false);
  const setUrlState = useSetRecoilState(anchorState);

  const handleClick = useCallback(() => {
    if (navigator.clipboard && window.isSecureContext) {
      const { origin, pathname } = window.location;
      void navigator.clipboard.writeText(`${origin}${pathname}#${id}`);

      setUrlState({
        showCopiedModal: true,
      });
    }
  }, [id, setUrlState]);

  useEffect(() => {
    setActive(decodeURIComponent(window.location.hash).substring(1) === id);
  }, [setActive]);

  return {
    active,
    handleClick,
  };
};
