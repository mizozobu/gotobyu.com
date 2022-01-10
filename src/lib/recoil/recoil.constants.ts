import { forexState, FOREX_STATE_KEY } from '@s/forex';
import { urlState, URL_STATE_KEY } from '@s/url';

/**
 * register atoms
 */
export const ATOM_REGISTRY = {
  [FOREX_STATE_KEY]: forexState,
  [URL_STATE_KEY]: urlState,
};
