import { ScreenSizes } from './ScreenSize.constants';
import { ScreenSizeType } from './ScreenSize.interface';

export const gt = (
  screenSize: ScreenSizeType,
  targetSize: ScreenSizeType,
): boolean => {
  const sizes = ScreenSizes.slice(
    ScreenSizes.findIndex((v) => v === targetSize) + 1,
    ScreenSizes.length,
  );
  return sizes.includes(screenSize);
};

export const gte = (
  screenSize: ScreenSizeType,
  targetSize: ScreenSizeType,
): boolean => {
  const sizes = ScreenSizes.slice(
    ScreenSizes.findIndex((v) => v === targetSize),
    ScreenSizes.length,
  );
  return sizes.includes(screenSize);
};

export const lt = (
  screenSize: ScreenSizeType,
  targetSize: ScreenSizeType,
): boolean => {
  const sizes = ScreenSizes.slice(
    0,
    ScreenSizes.findIndex((v) => v === targetSize),
  );
  return sizes.includes(screenSize);
};

export const lte = (
  screenSize: ScreenSizeType,
  targetSize: ScreenSizeType,
): boolean => {
  const sizes = ScreenSizes.slice(
    0,
    ScreenSizes.findIndex((v) => v === targetSize) + 1,
  );
  return sizes.includes(screenSize);
};
