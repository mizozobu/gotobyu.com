import { useCallback, ComponentPropsWithoutRef } from 'react';
import { useRecoilState } from 'recoil';
import { H3 as _H3 } from '@cmp/atoms/H3';
import { SectionTitle as _SectionTitle } from '@cmp/molecules/SectionTitle';
import { urlState } from '@s/url';

interface Props
  extends Omit<ComponentPropsWithoutRef<typeof _SectionTitle>, 'active'> {
  id: string;
  children: string;
}

export const H3 = ({ id, children, ...props }: Props) => {
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

  return (
    <_SectionTitle
      {...props}
      as={_H3}
      id={id}
      active={hash === id}
      onClick={handleClick}
    >
      {children}
    </_SectionTitle>
  );
};
