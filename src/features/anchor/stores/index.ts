import { atom } from 'recoil';

/**
 * Key for recoil anchor state
 */
export const ANCHOR_STATE_KEY = 'anchor/anchor' as const;

/**
 * Type for recoil anchor state
 */
interface AnchorState {
  /** Whether to show the copied modal */
  showCopiedModal: boolean;
}

/**
 * Default state for recoil anchor state
 */
const defaultAnchorState: AnchorState = {
  showCopiedModal: false,
};

/**
 * Recoil anchor state
 */
export const anchorState = atom<AnchorState>({
  key: ANCHOR_STATE_KEY,
  default: defaultAnchorState,
});
