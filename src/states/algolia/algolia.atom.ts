import { atom } from 'recoil';
import { ALGOLIA_STATE_KEY } from './algolia.constants';
import { AlgoliaState } from './algolia.interface';

export const defaultAlgoliaState: AlgoliaState = {
  isAvailable: true,
};

export const algoliaState = atom<AlgoliaState>({
  key: ALGOLIA_STATE_KEY,
  default: defaultAlgoliaState,
});
