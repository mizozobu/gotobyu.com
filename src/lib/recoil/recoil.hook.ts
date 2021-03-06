// eslint-disable-next-line camelcase
import { useRecoilTransaction_UNSTABLE } from 'recoil';
import type { AtomKey, RecoilProps } from './recoil.interface';
import { getAtomByKey } from './recoil.util';

/**
 * Hook to initialize atoms on client side
 * @param recoilProps Recoil atoms received from AtomStore.with
 */
export const useRecoilHydrate = (recoilProps: Partial<RecoilProps>): void => {
  const hydrate = useRecoilTransaction_UNSTABLE(
    ({ set }) =>
      () => {
        Object.entries(recoilProps).forEach(([atomKey, atomState]) => {
          const atom = getAtomByKey(atomKey as AtomKey);
          set(atom, (prevState) => ({
            ...prevState,
            ...atomState,
          }));
        });
      },
    [recoilProps],
  );

  hydrate();
};
