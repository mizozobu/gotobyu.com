import { SCREEN } from './media.constants';
import type { ScreenSize } from './media.interface';

export const mediaGte = (size: ScreenSize): boolean =>
  window.matchMedia(`(min-width: ${SCREEN[size]}px)`).matches;
