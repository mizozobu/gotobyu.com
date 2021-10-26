import { atom } from 'recoil';
import { GlobalStateKey } from './global.constants';
import { GlobalState } from './global.interface';

export const globalState = atom<GlobalState>({
  key: GlobalStateKey,
  default: {
    hash: '',
    showCopiedModal: false,
    exrate: 110,
  },
});
