import { forexState, FOREX_STATE_KEY } from '@s/forex';
import { statsState, STATS_STATE_KEY } from '@s/stats';
import { urlState, URL_STATE_KEY } from '@s/url';

/**
 * register atoms
 */
export const ATOM_REGISTRY = {
  [FOREX_STATE_KEY]: forexState,
  [URL_STATE_KEY]: urlState,
  [STATS_STATE_KEY]: statsState,
};
