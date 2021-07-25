import { useEffect, useCallback, FC } from 'react';
import { useRecoilState } from 'recoil';
import { globalState } from '@s/global';
import { CopiedDialog, Props as CopiedDialogProps } from './CopiedDialog';

export interface Props extends Omit<CopiedDialogProps, 'isOpen' | 'onClose'> {}

const CopiedDialogContainer: FC<Props> = (props: Props) => {
  const [isOpen, setIsOpen] = useRecoilState(globalState);

  const closeDialog = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  useEffect(() => {
    const timeout = setTimeout(() => closeDialog(), 1500);
    return () => clearTimeout(timeout);
  }, [isOpen, closeDialog]);

  return <CopiedDialog {...props} isOpen={isOpen} onClose={closeDialog} />;
};

export default CopiedDialogContainer;
