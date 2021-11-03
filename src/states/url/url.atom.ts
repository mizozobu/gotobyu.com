import { atom } from 'recoil';
import { UrlStateKey } from './url.constants';
import { UrlState } from './url.interface';

export const defaultUrlState: UrlState = {
  hash: '',
  showCopiedModal: false,
};

export const urlState = atom<UrlState>({
  key: UrlStateKey,
  default: defaultUrlState,
});
