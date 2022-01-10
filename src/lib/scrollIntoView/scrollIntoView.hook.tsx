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
    // wait a moment to load dynamic components and headlessui tab.
    // check document.documentElement.scrollHeight and document.documentElement.offsetHeight.
    const timeout = setTimeout(() => {
      document
        .getElementById(hash)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  });

  useEffect(() => {
    setUrlState((prevState) => ({
      ...prevState,
      hash,
    }));
  }, [hash, setUrlState]);
};
