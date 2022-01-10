import { atom } from 'recoil';
import { URL_STATE_KEY } from './url.constants';
import { UrlState } from './url.interface';

export const defaultUrlState: UrlState = {
  hash: '',
  showCopiedModal: false,
};

export const urlState = atom<UrlState>({
  key: URL_STATE_KEY,
  default: defaultUrlState,
});
