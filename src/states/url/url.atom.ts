import { atom } from 'recoil';
import { URL_STATE_KEY } from './url.constants';
import { UrlState } from './url.interface';

/**
 * Default state for recoil url state
 */
export const defaultUrlState: UrlState = {
  hash: '',
  showCopiedModal: false,
};

/**
 * Recoil url state
 */
export const urlState = atom<UrlState>({
  key: URL_STATE_KEY,
  default: defaultUrlState,
});
