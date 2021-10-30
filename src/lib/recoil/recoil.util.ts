import type { MutableSnapshot } from 'recoil';
import { GetStaticPropsResult, Redirect } from 'next';
import { AtomRegistry } from './recoil.constants';
import type {
  AtomKey,
  AtomState,
  AtomStatePlain,
  RecoilProps,
} from './recoil.interface';

/**
 * store for atoms on server side
 */
export class AtomStore {
  /**
   * atom store
   */
  store = new Map<AtomKey, AtomState>();

  /**
   * register atom in store
   *
   * @param atomKey
   * @param value
   */
  setAtom(atomKey: AtomKey, value: AtomState): void {
    this.store.set(atomKey, value);
  }

  /**
   * get recoil store as a plain object
   *
   * @returns recoil store as a plain object
   */
  serializeStore(): { [key in AtomKey]: AtomState } {
    return Object.fromEntries(this.store) as { [key in AtomKey]: AtomState };
  }

  /**
   * wrap props with recoil state in getStaticProps/getServerSideProps
   *
   * @param getStaticPropsResult
   * @returns GetStaticPropsResult
   */
  with<P extends { [key: string]: unknown } = { [key: string]: unknown }>(
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
 * receive recoil state plain object from withRecoil and init atoms on client side
 *
 * @param pageProps
 */
export const hydrateAtoms =
  (recoilProps: RecoilProps) =>
  ({ set }: MutableSnapshot) => {
    Object.entries(recoilProps ?? {}).forEach((entry) => {
      const [atomKey, atomState] = entry as [AtomKey, AtomStatePlain];
      const atom = AtomRegistry[atomKey];
      set(atom, (prevState) => ({
        ...prevState,
        ...atomState,
      }));
    });
  };
