import { NextImage } from '@c/atoms/NextImage';
import byuLogoImage from '@p/byu/byu-logo.png';
import byuhLogoImage from '@p/byuh/byuh-logo.png';
import byuiLogoImage from '@p/byui/byui-logo.png';

/**
 * <th> for BYU
 */
const ThBYU = (): JSX.Element => (
  <th scope='col'>
    <NextImage
      className='h-full p-4'
      src={byuLogoImage}
      alt='BYU Logo'
      placeholder='blur'
      layout='fill'
      objectFit='scale-down'
    />
    <span className='text-byu'>BYU</span>
  </th>
);

/**
 * <th> for BYUH
 */
const ThBYUH = (): JSX.Element => (
  <th scope='col'>
    <NextImage
      className='h-full p-4'
      src={byuhLogoImage}
      alt='BYUH Logo'
      placeholder='blur'
      layout='fill'
      objectFit='scale-down'
    />
    <span className='text-byuh'>BYUH</span>
  </th>
);

/**
 * <th> for BYUI
 */
const ThBYUI = (): JSX.Element => (
  <th scope='col'>
    <NextImage
      className='h-full p-4'
      src={byuiLogoImage}
      alt='BYUI Logo'
      placeholder='blur'
      layout='fill'
      objectFit='scale-down'
    />
    <span className='text-byui'>BYUI</span>
  </th>
);

export const SchoolTh = {
  BYU: ThBYU,
  BYUH: ThBYUH,
  BYUI: ThBYUI,
};
