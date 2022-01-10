import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { urlState } from '@s/url';

/**
 * scroll into a section and update recoil when url hash changes
 */
export const useScrollIntoView = () => {
  const setUrlState = useSetRecoilState(urlState);
  const router = useRouter();
  const hash = decodeURIComponent(router.asPath.split('#')[1]);

  useEffect(() => {
    document
      .getElementById(hash)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  useEffect(() => {
    setUrlState((prevState) => ({
      ...prevState,
      hash,
    }));
  }, [hash, setUrlState]);
};
