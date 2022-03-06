import { algoliaState, ALGOLIA_STATE_KEY } from '@s/algolia';
import { forexState, FOREX_STATE_KEY } from '@s/forex';
import { statsState, STATS_STATE_KEY } from '@s/stats';
import { urlState, URL_STATE_KEY } from '@s/url';

/**
 * Atom registry
 */
export const ATOM_REGISTRY = {
  [ALGOLIA_STATE_KEY]: algoliaState,
  [FOREX_STATE_KEY]: forexState,
  [STATS_STATE_KEY]: statsState,
  [URL_STATE_KEY]: urlState,
};
