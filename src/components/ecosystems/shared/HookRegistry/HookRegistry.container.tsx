import { useGtm } from '@l/gtm';
import { useRecoilHydrate, RecoilProps } from '@l/recoil';
import { useSyncRouteHash } from '@l/useSyncRouteHash';

/**
 * Props for {@link HookRegistry}
 */
interface Props {
  /** Next.js pageProps typed since it's originally any */
  pageProps: { [key: string]: unknown }; // FIXME
}

/**
 * Component to register hooks required to be used in certain components (e.g. RecoilRoot)
 * @returns null
 */
export const HookRegistry = ({ pageProps }: Props): null => {
  useGtm();
  useRecoilHydrate((pageProps._recoil as Partial<RecoilProps>) ?? {});
  useSyncRouteHash();

  return null;
};
