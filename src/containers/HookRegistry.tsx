import { useGtm } from '@l/gtm';
import { useRecoilHydrate, RecoilProps } from '@l/recoil';
import { useScrollIntoView } from '@l/scrollIntoView';

interface Props {
  pageProps: { [key: string]: unknown }; // FIXME
}

/**
 * component to register hooks required to be used in certain components (e.g. RecoilRoot)
 *
 * @returns null
 */
export const HookRegistry = ({ pageProps }: Props) => {
  useGtm();
  useRecoilHydrate((pageProps._recoil as Partial<RecoilProps>) ?? {});
  useScrollIntoView();

  return null;
};
