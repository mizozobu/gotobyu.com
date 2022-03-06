import { atom } from 'recoil';
import { ALGOLIA_STATE_KEY } from './algolia.constants';
import { AlgoliaState } from './algolia.interface';

/**
 * Default state for recoil algolia state
 */
export const defaultAlgoliaState: AlgoliaState = {
  isAvailable: true,
};

/**
 * Recoil algolia state
 */
export const algoliaState = atom<AlgoliaState>({
  key: ALGOLIA_STATE_KEY,
  default: defaultAlgoliaState,
});
