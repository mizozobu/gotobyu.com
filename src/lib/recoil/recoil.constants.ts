import { forexState, ForexStateKey } from '@s/forex';
import { urlState, UrlStateKey } from '@s/url';

/**
 * register atoms
 */
export const AtomRegistry = {
  [ForexStateKey]: forexState,
  [UrlStateKey]: urlState,
};
