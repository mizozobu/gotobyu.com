/**
 * Type for recoil algolia state
 */
export interface AlgoliaState {
  /**
   * Whether algolia is available.
   * Algolia allows 10,000 requests per month.
   */
  isAvailable: boolean;
}
