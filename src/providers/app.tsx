import { type ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import { useGtm } from '@/hooks/useGtm';
import { useRecoilHydrate, type RecoilProps } from '@/lib/recoil';

/**
 * Props for {@link AppProvider}
 */
interface Props {
  /** Next.js pageProps typed since it's originally any */
  pageProps: { [key: string]: unknown }; // FIXME
  /** Children to pass */
  children: ReactNode;
}

/**
 * Component to register hooks required to be used in certain components (e.g. RecoilRoot)
 * @returns null
 */
const HookRegistry = ({ pageProps }: Pick<Props, 'pageProps'>): null => {
  useGtm();
  useRecoilHydrate((pageProps._recoil as Partial<RecoilProps>) ?? {});

  return null;
};

/**
 * Root provider
 */
export const AppProvider = ({ pageProps, children }: Props): JSX.Element => (
  <RecoilRoot>
    <HookRegistry pageProps={pageProps} />
    {children}
  </RecoilRoot>
);
