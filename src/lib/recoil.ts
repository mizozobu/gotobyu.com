import type { GetStaticPropsResult, Redirect } from 'next';
// eslint-disable-next-line camelcase
import { useRecoilTransaction_UNSTABLE, type RecoilState } from 'recoil';
import type { ValuesType } from 'utility-types';
import { anchorState, ANCHOR_STATE_KEY } from '@/features/anchor';
import { forexState, FOREX_STATE_KEY } from '@/features/forex';
import { statsState, STATS_STATE_KEY } from '@/features/stats';

/**
 * Atom registry
 */
const ATOM_REGISTRY = {
  [FOREX_STATE_KEY]: forexState,
  [STATS_STATE_KEY]: statsState,
  [ANCHOR_STATE_KEY]: anchorState,
};

/**
 * Extract T from {@link RecoilState<T>}
 */
type UnpackedRecoilState<T> = T extends RecoilState<infer U> ? U : never;

/**
 * Union type for all atom states in {@link ATOM_REGISTRY}
 */
type AtomState = ValuesType<typeof ATOM_REGISTRY>;

/**
 * Union type for all atom state plain objects
 */
type AtomStatePlain = UnpackedRecoilState<AtomState>;

/**
 * Union type for all atom keys in {@link ATOM_REGISTRY}
 */
type AtomKey = keyof typeof ATOM_REGISTRY;

/**
 * Type used to receive serialized recoil state from server in client
 */
export type RecoilProps = {
  [K in AtomKey]: UnpackedRecoilState<(typeof ATOM_REGISTRY)[K]>;
};

/**
 * Store for atoms on server side
 */
export class AtomStore {
  /** Atom store */
  private store = new Map<AtomKey, AtomStatePlain>();

  /**
   * Register atom in store
   * @param atomKey Key for the atom
   * @param value Atom as plain object
   */
  public setAtom(atomKey: AtomKey, value: AtomStatePlain): void {
    this.store.set(atomKey, value);
  }

  /**
   * Get {@link AtomStore} as a plain object
   * @returns AtomStore as a plain object
   */
  public serializeStore(): { [key in AtomKey]: AtomStatePlain } {
    return Object.fromEntries(this.store) as {
      [key in AtomKey]: AtomStatePlain;
    };
  }

  /**
   * Wrap props with recoil state on server side
   * @param getStaticPropsResult
   * @returns GetStaticPropsResult
   */
  public with<
    P extends { [key: string]: unknown } = { [key: string]: unknown },
  >(
    // really hard to use GetStaticPropsResult<P>
    getStaticPropsResult: {
      redirect?: Redirect;
      notFound?: true;
      props?: P;
      revalidate?: number | boolean;
    } = {},
  ): GetStaticPropsResult<P> {
    if (getStaticPropsResult.redirect !== undefined) {
      return getStaticPropsResult as {
        redirect: Redirect;
        revalidate?: number | boolean;
      };
    }
    if (getStaticPropsResult.notFound !== undefined) {
      return getStaticPropsResult as {
        notFound: true;
        revalidate?: number | boolean;
      };
    }
    return {
      ...getStaticPropsResult,
      props: {
        ...(getStaticPropsResult.props ?? {}),
        _recoil: this.serializeStore(),
      } as unknown as P,
    } as { props: P; revalidate?: number | boolean };
  }
}

/**
 * Get atom from {@link ATOM_REGISTRY} by key
 * @param key Key for the atom
 * @returns Atom as plain object
 */
export const getAtomByKey = (key: AtomKey): RecoilState<AtomStatePlain> =>
  ATOM_REGISTRY[key] as RecoilState<AtomStatePlain>;

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
