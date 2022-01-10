import { SCREEN_SIZE_LIST } from './screenSize.constants';
import type { ScreenSizeType } from './screenSize.interface';

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
