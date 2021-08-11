import { useState, FC } from 'react';
import { Table } from '@c/atoms/Table';
import { TableCaption } from '@c/atoms/TableCaption';
import { Digit } from '@c/atoms/Digit';
import { NextImage } from '@c/atoms/NextImage';
import { SwitchControl } from '@c/molecules/SwitchControl';
import { CostData } from '@d';
import byuLogoImage from '@p/byu.png';
import byuhLogoImage from '@p/byuh.png';
import byuiLogoImage from '@p/byui.png';

export interface Props {
  rate: number;
}

export const CostTable: FC<Props> = ({ rate }: Props) => {
  const [isJPY, setIsJPY] = useState(false);
  const unit = isJPY ? '¥' : '$';
  const r = isJPY ? rate : 1;

  return (
    <>
      <div className='flex flex-row space-x-4'>
        <SwitchControl
          checked={isJPY}
          onChange={setIsJPY}
          label='日本円'
          sr='Switch Currency'
        />
      </div>

      <Table className='my-2 px-0'>
        <TableCaption>1学期の費用({isJPY ? '円' : 'ドル'})</TableCaption>
        <thead>
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
        <tbody>
          <tr>
            <th scope='row'>学費</th>
            <td>
              {unit}
              <Digit>{CostData.byu.tuition * r}</Digit>
            </td>
            <td>
              {unit}
              <Digit>{CostData.byuh.tuition * r}</Digit>
            </td>
            <td>
              {unit}
              <Digit>{CostData.byui.tuition * r}</Digit>
            </td>
          </tr>
          <tr>
            <th scope='row'>家賃と食費</th>
            <td>
              {unit}
              <Digit>{CostData.byu.housing * r}</Digit>
            </td>
            <td>
              {unit}
              <Digit>{CostData.byuh.housing * r}</Digit>
            </td>
            <td>
              {unit}
              <Digit>{CostData.byui.housing * r}</Digit>
            </td>
          </tr>
          <tr>
            <th scope='row'>教科書費</th>
            <td>
              {unit}
              <Digit>{CostData.byu.books * r}</Digit>
            </td>
            <td>
              {unit}
              <Digit>{CostData.byuh.books * r}</Digit>
            </td>
            <td>
              {unit}
              <Digit>{CostData.byui.books * r}</Digit>
            </td>
          </tr>
          <tr>
            <th scope='row'>生活費</th>
            <td>
              {unit}
              <Digit>{CostData.byu.personal * r}</Digit>
            </td>
            <td>
              {unit}
              <Digit>{CostData.byuh.personal * r}</Digit>
            </td>
            <td>
              {unit}
              <Digit>{CostData.byui.personal * r}</Digit>
            </td>
          </tr>
          <tr>
            <th scope='row'>交通費</th>
            <td>
              {unit}
              <Digit>{CostData.byu.transportation * r}</Digit>
            </td>
            <td>
              {unit}
              <Digit>{CostData.byuh.transportation * r}</Digit>
            </td>
            <td>
              {unit}
              <Digit>{CostData.byui.transportation * r}</Digit>
            </td>
          </tr>
          <tr>
            <th scope='row'>ローン費用</th>
            <td>
              {unit}
              <Digit>{CostData.byu.loan * r}</Digit>
            </td>
            <td>
              {unit}
              <Digit>{CostData.byuh.loan * r}</Digit>
            </td>
            <td>
              {unit}
              <Digit>{CostData.byui.loan * r}</Digit>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope='row'>合計</th>
            <td>
              {unit}
              <Digit>
                {Object.values(CostData.byu).reduce(
                  (accumulate, current) => accumulate + current,
                ) * r}
              </Digit>
            </td>
            <td>
              {unit}
              <Digit>
                {Object.values(CostData.byuh).reduce(
                  (accumulate, current) => accumulate + current,
                ) * r}
              </Digit>
            </td>
            <td>
              {unit}
              <Digit>
                {Object.values(CostData.byui).reduce(
                  (accumulate, current) => accumulate + current,
                ) * r}
              </Digit>
            </td>
          </tr>
        </tfoot>
      </Table>
    </>
  );
};
