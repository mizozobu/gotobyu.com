import { RecoilState } from 'recoil';
import type { ValuesType } from 'utility-types';
import { AtomRegistry } from './recoil.constants';

/**
 * extract T from RecoilState<T>
 */
export type UnpackedRecoilState<T> = T extends RecoilState<infer U> ? U : never;

/**
 * union type for all atom states
 */
export type AtomState = ValuesType<typeof AtomRegistry>;

/**
 * union type for all atom state plain objects
 */
export type AtomStatePlain = UnpackedRecoilState<AtomState>;

/**
 * union type for all atom keys
 */
export type AtomKey = keyof typeof AtomRegistry;

/**
 * type used to receive serialized recoil state from server in client
 */
export type RecoilProps = {
  [K in AtomKey]: UnpackedRecoilState<typeof AtomRegistry[K]>;
};

/**
 * return AtomRegistry value type from key
 */
export type AtomRegistryValue<K extends AtomKey> = typeof AtomRegistry[K];
