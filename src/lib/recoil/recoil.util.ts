import type { GetStaticPropsResult, Redirect } from 'next';
import type { RecoilState } from 'recoil';
import { ATOM_REGISTRY } from './recoil.constants';
import type { AtomKey, AtomStatePlain } from './recoil.interface';

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
   * Wrap props with recoil state in getStaticProps/getServerSideProps
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
