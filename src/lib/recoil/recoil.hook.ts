// eslint-disable-next-line camelcase
import { useRecoilTransaction_UNSTABLE } from 'recoil';
import type { AtomKey, RecoilProps } from './recoil.interface';
import { getAtomByKey } from './recoil.util';

/**
 * receive recoil state plain object from withRecoil and init atoms on client side
 *
 * @param recoilProps
 */
export const useRecoilHydrate = (recoilProps: Partial<RecoilProps>) => {
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
