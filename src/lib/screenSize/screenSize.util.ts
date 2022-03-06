import { SCREEN_SIZE_LIST } from './screenSize.constants';
import type { ScreenSizeType } from './screenSize.interface';

/**
 * Return true if the screen size is greater than the other screen size
 * @param screenSize Screen size to be checked
 * @param targetSize Target screen size
 * @returns Whether {@link screenSize} is greater than {@link targetSize}
 */
export const gt = (
  screenSize: ScreenSizeType,
  targetSize: ScreenSizeType,
): boolean => {
  const sizes = SCREEN_SIZE_LIST.slice(
    SCREEN_SIZE_LIST.findIndex((v) => v === targetSize) + 1,
    SCREEN_SIZE_LIST.length,
  );
  return sizes.includes(screenSize);
};

/**
 * Return true if the screen size is greater than or equal to the other screen size
 * @param screenSize Screen size to be checked
 * @param targetSize Target screen size
 * @returns Whether {@link screenSize} is greater than or equal to {@link targetSize}
 */
export const gte = (
  screenSize: ScreenSizeType,
  targetSize: ScreenSizeType,
): boolean => {
  const sizes = SCREEN_SIZE_LIST.slice(
    SCREEN_SIZE_LIST.findIndex((v) => v === targetSize),
    SCREEN_SIZE_LIST.length,
  );
  return sizes.includes(screenSize);
};

/**
 * Return true if the screen size is less than the other screen size
 * @param screenSize Screen size to be checked
 * @param targetSize Target screen size
 * @returns Whether {@link screenSize} is less than {@link targetSize}
 */
export const lt = (
  screenSize: ScreenSizeType,
  targetSize: ScreenSizeType,
): boolean => {
  const sizes = SCREEN_SIZE_LIST.slice(
    0,
    SCREEN_SIZE_LIST.findIndex((v) => v === targetSize),
  );
  return sizes.includes(screenSize);
};

/**
 * Return true if the screen size is less than or equal to the other screen size
 * @param screenSize Screen size to be checked
 * @param targetSize Target screen size
 * @returns Whether {@link screenSize} is less or equal to than {@link targetSize}
 */
export const lte = (
  screenSize: ScreenSizeType,
  targetSize: ScreenSizeType,
): boolean => {
  const sizes = SCREEN_SIZE_LIST.slice(
    0,
    SCREEN_SIZE_LIST.findIndex((v) => v === targetSize) + 1,
  );
  return sizes.includes(screenSize);
};
