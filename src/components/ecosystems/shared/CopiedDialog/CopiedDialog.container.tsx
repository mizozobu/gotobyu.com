import { useEffect, useCallback, ComponentPropsWithoutRef } from 'react';
import { useRecoilState } from 'recoil';
import { urlState } from '@s/url';
import { CopiedDialog as _CopiedDialog } from './CopiedDialog';

export interface Props
  extends Omit<
    ComponentPropsWithoutRef<typeof _CopiedDialog>,
    'isOpen' | 'onClose'
  > {}

export const CopiedDialog = (props: Props) => {
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
