import type { RecoilState } from 'recoil';
import type { ValuesType } from 'utility-types';
import { ATOM_REGISTRY } from './recoil.constants';

/**
 * Extract T from {@link RecoilState<T>}
 */
export type UnpackedRecoilState<T> = T extends RecoilState<infer U> ? U : never;

/**
 * Union type for all atom states in {@link ATOM_REGISTRY}
 */
export type AtomState = ValuesType<typeof ATOM_REGISTRY>;

/**
 * Union type for all atom state plain objects
 */
export type AtomStatePlain = UnpackedRecoilState<AtomState>;

/**
 * Union type for all atom keys in {@link ATOM_REGISTRY}
 */
export type AtomKey = keyof typeof ATOM_REGISTRY;

/**
 * Type used to receive serialized recoil state from server in client
 */
export type RecoilProps = {
  [K in AtomKey]: UnpackedRecoilState<typeof ATOM_REGISTRY[K]>;
};

/**
 * Return {@link ATOM_REGISTRY} value type from key
 */
export type AtomRegistryValue<K extends AtomKey> = typeof ATOM_REGISTRY[K];
