import { useEffect } from 'react';
import type { StateResultsProvided } from 'react-instantsearch-core';
import { useSetRecoilState } from 'recoil';
import { algoliaState } from '@s/algolia';

/**
 * Props for CustomStateResults
 */
interface Props extends StateResultsProvided {
  /**
   * Algolia error.
   * AlgoliaError does not have "status" (probably a bug in DefinitelyTyped).
   */
  error: StateResultsProvided['error'] & { status: number };
}

/**
 * Custom algolia StateResults
 */
export const CustomStateResults = ({ error }: Props) => {
  const setAlgoliaState = useSetRecoilState(algoliaState);

  useEffect(() => {
    if (error?.status === 403) {
      setAlgoliaState((prevState) => ({
        ...prevState,
        isAvailable: false,
      }));
    }
  }, [error, setAlgoliaState]);

  return null;
};
