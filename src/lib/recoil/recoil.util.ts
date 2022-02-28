import type { GetStaticPropsResult, Redirect } from 'next';
import { RecoilState } from 'recoil';
import { ATOM_REGISTRY } from './recoil.constants';
import type { AtomKey, AtomState, AtomStatePlain } from './recoil.interface';

/**
 * store for atoms on server side
 */
export class AtomStore {
  /**
   * atom store
   */
  store = new Map<AtomKey, AtomStatePlain>();

  /**
   * register atom in store
   *
   * @param atomKey
   * @param value
   */
  setAtom(atomKey: AtomKey, value: AtomStatePlain): void {
    this.store.set(atomKey, value);
  }

  /**
   * get recoil store as a plain object
   *
   * @returns recoil store as a plain object
   */
  serializeStore(): { [key in AtomKey]: AtomStatePlain } {
    return Object.fromEntries(this.store) as {
      [key in AtomKey]: AtomStatePlain;
    };
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
 * get atom from AtomRegistry by key
 *
 * @param key
 * @returns atom
 */
export const getAtomByKey = (key: AtomKey): RecoilState<AtomStatePlain> =>
  ATOM_REGISTRY[key] as RecoilState<AtomStatePlain>;
