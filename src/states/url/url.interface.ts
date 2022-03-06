/**
 * Type for recoil url state
 */
export interface UrlState {
  /** Current hash(id) of url */
  hash: string;

  /** Whether to show the copied modal */
  showCopiedModal: boolean;
}
