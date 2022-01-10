import { FC } from 'react';
import { useRecoilHydrate, RecoilProps } from '@l/recoil';
import { useScrollIntoView } from '@l/scroll-into-view';

export interface Props {
  pageProps: { [key: string]: unknown }; // FIXME
}

/**
 * component to register hooks required to be used in certain components (e.g. RecoilRoot)
 *
 * @returns null
 */
export const HookRegistry: FC<Props> = ({ pageProps }: Props) => {
  // eslint-disable-next-line no-underscore-dangle
  useRecoilHydrate((pageProps._recoil as Partial<RecoilProps>) ?? {});
  useScrollIntoView();

  return null;
};
