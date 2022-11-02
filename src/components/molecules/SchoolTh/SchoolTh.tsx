import { NextImage } from '@/components/atoms/NextImage';
import byuLogoImage from '@/features/byu/assets/byu-logo.png';
import byuhLogoImage from '@/features/byuh/assets/byuh-logo.png';
import byuiLogoImage from '@/features/byui/assets/byui-logo.png';

type ISchoolTh = () => JSX.Element;

/**
 * <th> for BYU
 */
const ByuTh: ISchoolTh = () => (
  <th scope='col' className='relative'>
    <NextImage
      className='mx-auto w-8 object-contain'
      src={byuLogoImage}
      alt='BYU Logo'
      placeholder='blur'
    />
    <span className='text-byu'>BYU</span>
  </th>
);

/**
 * <th> for BYUH
 */
const ByuhTh: ISchoolTh = () => (
  <th scope='col'>
    <NextImage
      className='mx-auto w-8 object-contain'
      src={byuhLogoImage}
      alt='BYUH Logo'
      placeholder='blur'
    />
    <span className='text-byuh'>BYUH</span>
  </th>
);

/**
 * <th> for BYUI
 */
const ByuiTh: ISchoolTh = () => (
  <th scope='col'>
    <NextImage
      className='mx-auto w-8 object-contain'
      src={byuiLogoImage}
      alt='BYUI Logo'
      placeholder='blur'
    />
    <span className='text-byui'>BYUI</span>
  </th>
);

export const SchoolTh = {
  BYU: ByuTh,
  BYUH: ByuhTh,
  BYUI: ByuiTh,
};
