import { useCallback, FC } from 'react';
import { useRecoilState } from 'recoil';
import { globalState } from '@s/global';
import { SectionTitle, Props as SectionTitleProps } from './SectionTitle';

export interface Props extends Omit<SectionTitleProps, 'active' | 'anchorFor'> {
  children: string;
}

const SectionTitleContainer: FC<Props> = ({ children, ...props }: Props) => {
  const [{ hash }, setGlobalState] = useRecoilState(globalState);

  const handleClick = useCallback(() => {
    if (navigator.clipboard && window.isSecureContext) {
      const { origin, pathname } = window.location;
      void navigator.clipboard.writeText(`${origin}${pathname}#${children}`);

      setGlobalState((prevState) => ({
        ...prevState,
        showCopiedModal: true,
      }));
    }
  }, [children, setGlobalState]);

  return (
    <SectionTitle
      {...props}
      anchorFor={children}
      active={hash === children}
      onClick={handleClick}
    >
      {children}
    </SectionTitle>
  );
};

export default SectionTitleContainer;
