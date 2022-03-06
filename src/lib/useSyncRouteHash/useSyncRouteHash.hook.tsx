import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { urlState } from '@s/url';

/**
 * Hook to scroll into a section and update {@link urlState} when url hash changes
 */
export const useSyncRouteHash = (): void => {
  const setUrlState = useSetRecoilState(urlState);
  const router = useRouter();
  const hash = decodeURIComponent(router.asPath.split('#')[1] ?? '');

  useEffect(() => {
    setUrlState((prevState) => ({
      ...prevState,
      hash,
    }));
  }, [hash, setUrlState]);
};
