import { useCallback, FC } from 'react';
import { useRecoilState } from 'recoil';
import { urlState } from '@s/url';
import { SectionTitle, Props as SectionTitleProps } from './SectionTitle';

export interface Props extends Omit<SectionTitleProps, 'active'> {
  id: string;
  children: string;
}

const SectionTitleContainer: FC<Props> = ({
  id,
  children,
  ...props
}: Props) => {
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
    <SectionTitle {...props} id={id} active={hash === id} onClick={handleClick}>
      {children}
    </SectionTitle>
  );
};

export default SectionTitleContainer;
