import { useCallback, useEffect, useState, FC } from 'react';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { globalState } from '@s/global';
import { SectionTitle, Props as SectionTitleProps } from './SectionTitle';

export interface Props extends Omit<SectionTitleProps, 'active'> {}

const SectionTitleContainer: FC<Props> = ({ id, ...props }: Props) => {
  const [active, setActive] = useState(false);
  const setGlobalState = useSetRecoilState(globalState);
  const router = useRouter();
  const [, hash] = router.asPath.split('#');

  const handleClick = useCallback(() => {
    if (navigator.clipboard && window.isSecureContext) {
      const { origin, pathname } = window.location;
      void navigator.clipboard.writeText(`${origin}${pathname}#${id}`);

      setGlobalState((prevState) => ({
        ...prevState,
        showCopiedModal: true,
      }));
    }
  }, [id, setGlobalState]);

  useEffect(() => {
    setActive(decodeURIComponent(hash) === id);
  }, [hash, id]);

  return (
    <SectionTitle {...props} id={id} active={active} onClick={handleClick} />
  );
};

export default SectionTitleContainer;
