import { useEffect, FC } from 'react';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { urlState } from '@s/url';

export interface Props {}

// this is a non-UI compoenent.
// can't find a good component to put this logic.
export const ScrollIntoView: FC<Props> = () => {
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

  return null;
};
