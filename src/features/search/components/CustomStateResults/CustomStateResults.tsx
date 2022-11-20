import { useEffect } from 'react';
import type { StateResultsProvided } from 'react-instantsearch-core';

/**
 * Props for {@link CustomStateResults}
 */
interface Props extends StateResultsProvided {
  /**
   * Algolia error.
   * AlgoliaError does not have "status" (probably a bug in DefinitelyTyped).
   */
  error: StateResultsProvided['error'] & { status: number };
  /** Error event handler */
  onError: (err: Error) => void;
}

/**
 * Custom algolia StateResults
 */
export const CustomStateResults = ({ error, onError }: Props): null => {
  useEffect(() => {
    onError(error);
  }, [error, onError]);

  return null;
};
