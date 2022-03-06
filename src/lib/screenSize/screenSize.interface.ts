import type { ValuesType } from 'utility-types';
import { SCREEN_SIZE } from './screenSize.constants';

/**
 * Type for possible screen size
 */
export type ScreenSizeType = ValuesType<typeof SCREEN_SIZE>;

/**
 * Type for resize event handler
 */
export type ResizeHandler = (screenSize: ScreenSizeType) => void;
