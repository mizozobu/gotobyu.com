import { useEffect, useCallback, FC } from 'react';
import { useRecoilState } from 'recoil';
import {
  CopiedDialog as _CopiedDialog,
  Props as CopiedDialogProps,
} from '@cmp/organisms/CopiedDialog';
import { urlState } from '@s/url';

export interface Props extends Omit<CopiedDialogProps, 'isOpen' | 'onClose'> {}

export const CopiedDialog: FC<Props> = (props: Props) => {
  const [{ showCopiedModal }, setIsOpen] = useRecoilState(urlState);

  const closeDialog = useCallback(() => {
    setIsOpen((prevState) => ({
      ...prevState,
      showCopiedModal: false,
    }));
  }, [setIsOpen]);

  useEffect(() => {
    const timeout = setTimeout(() => closeDialog(), 1200);
    return () => clearTimeout(timeout);
  }, [showCopiedModal, closeDialog]);

  return (
    <_CopiedDialog {...props} isOpen={showCopiedModal} onClose={closeDialog} />
  );
};
