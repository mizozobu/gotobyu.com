import { useEffect, FC } from 'react';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { globalState } from '@s/global';

export interface Props {}

// this is a non-UI compoenent.
// can't find a good component to put this logic.
const ScrollIntoViewContainer: FC<Props> = () => {
  const setGlobalState = useSetRecoilState(globalState);
  const router = useRouter();
  const hash = decodeURIComponent(router.asPath.split('#')[1]);

  useEffect(() => {
    document
      .getElementById(hash)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  useEffect(() => {
    setGlobalState((prevState) => ({
      ...prevState,
      hash,
    }));
  }, [hash, setGlobalState]);

  return null;
};

export default ScrollIntoViewContainer;
