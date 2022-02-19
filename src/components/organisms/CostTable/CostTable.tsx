import { Digit } from '@cmp/atoms/Digit';
import { NextImage } from '@cmp/atoms/NextImage';
import { Table } from '@cmp/atoms/Table';
import { TableCaption } from '@cmp/atoms/TableCaption';
import { COST_OF_ATTENDACE } from '@d/cost-of-attendance';
import byuLogoImage from '@p/byu/byu-logo.png';
import byuhLogoImage from '@p/byuh/byuh-logo.png';
import byuiLogoImage from '@p/byui/byui-logo.png';

interface Props {
  exrate: number;
  isJPY: boolean;
  isLDS: boolean;
}

export const CostTable = ({ exrate, isJPY, isLDS }: Props) => {
  const unit = isJPY ? '¥' : '$';
  const multiplier = isJPY ? exrate : 1;
  const ldsRate = isLDS ? 1 : 2;

  return (
    <Table className='my-2 px-0'>
      <TableCaption description='BYU、BYUH、BYUIの1学期の費用(学費、家賃と食費、教科書費、生活費、交通費、ローン費用)'>
        1学期の費用({isJPY ? '円' : 'ドル'})
      </TableCaption>
      <thead data-noindex='true'>
        <tr>
          <th scope='col'>{}</th>
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
        </tr>
      </thead>
      <tbody data-noindex='true'>
        <tr>
          <th scope='row'>学費</th>
          <td>
            {unit}
            <Digit>
              {COST_OF_ATTENDACE.byu.tuition * multiplier * ldsRate}
            </Digit>
          </td>
          <td>
            {unit}
            <Digit>
              {COST_OF_ATTENDACE.byuh.tuition * multiplier * ldsRate}
            </Digit>
          </td>
          <td>
            {unit}
            <Digit>
              {COST_OF_ATTENDACE.byui.tuition * multiplier * ldsRate}
            </Digit>
          </td>
        </tr>
        <tr>
          <th scope='row'>家賃と食費</th>
          <td>
            {unit}
            <Digit>{COST_OF_ATTENDACE.byu.housing * multiplier}</Digit>
          </td>
          <td>
            {unit}
            <Digit>{COST_OF_ATTENDACE.byuh.housing * multiplier}</Digit>
          </td>
          <td>
            {unit}
            <Digit>{COST_OF_ATTENDACE.byui.housing * multiplier}</Digit>
          </td>
        </tr>
        <tr>
          <th scope='row'>教科書費</th>
          <td>
            {unit}
            <Digit>{COST_OF_ATTENDACE.byu.books * multiplier}</Digit>
          </td>
          <td>
            {unit}
            <Digit>{COST_OF_ATTENDACE.byuh.books * multiplier}</Digit>
          </td>
          <td>
            {unit}
            <Digit>{COST_OF_ATTENDACE.byui.books * multiplier}</Digit>
          </td>
        </tr>
        <tr>
          <th scope='row'>生活費</th>
          <td>
            {unit}
            <Digit>{COST_OF_ATTENDACE.byu.personal * multiplier}</Digit>
          </td>
          <td>
            {unit}
            <Digit>{COST_OF_ATTENDACE.byuh.personal * multiplier}</Digit>
          </td>
          <td>
            {unit}
            <Digit>{COST_OF_ATTENDACE.byui.personal * multiplier}</Digit>
          </td>
        </tr>
        <tr>
          <th scope='row'>交通費</th>
          <td>
            {unit}
            <Digit>{COST_OF_ATTENDACE.byu.transportation * multiplier}</Digit>
          </td>
          <td>
            {unit}
            <Digit>{COST_OF_ATTENDACE.byuh.transportation * multiplier}</Digit>
          </td>
          <td>
            {unit}
            <Digit>{COST_OF_ATTENDACE.byui.transportation * multiplier}</Digit>
          </td>
        </tr>
        <tr>
          <th scope='row'>ローン費用</th>
          <td>
            {unit}
            <Digit>{COST_OF_ATTENDACE.byu.loan * multiplier}</Digit>
          </td>
          <td>
            {unit}
            <Digit>{COST_OF_ATTENDACE.byuh.loan * multiplier}</Digit>
          </td>
          <td>
            {unit}
            <Digit>{COST_OF_ATTENDACE.byui.loan * multiplier}</Digit>
          </td>
        </tr>
      </tbody>
      <tfoot data-noindex='true'>
        <tr>
          <th scope='row'>合計</th>
          <td>
            {unit}
            <Digit>
              {Object.values({
                ...COST_OF_ATTENDACE.byu,
                tuition: COST_OF_ATTENDACE.byu.tuition * ldsRate,
              }).reduce((accumulate, current) => accumulate + current) *
                multiplier}
            </Digit>
          </td>
          <td>
            {unit}
            <Digit>
              {Object.values({
                ...COST_OF_ATTENDACE.byuh,
                tuition: COST_OF_ATTENDACE.byuh.tuition * ldsRate,
              }).reduce((accumulate, current) => accumulate + current) *
                multiplier}
            </Digit>
          </td>
          <td>
            {unit}
            <Digit>
              {Object.values({
                ...COST_OF_ATTENDACE.byui,
                tuition: COST_OF_ATTENDACE.byui.tuition * ldsRate,
              }).reduce((accumulate, current) => accumulate + current) *
                multiplier}
            </Digit>
          </td>
        </tr>
      </tfoot>
    </Table>
  );
};
