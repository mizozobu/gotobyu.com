import { useState, FC } from 'react';
import { Table } from '@c/atoms/Table';
import { TableCaption } from '@c/atoms/TableCaption';
import { Digit } from '@c/atoms/Digit';
import { NextImage } from '@c/atoms/NextImage';
import { SwitchControl } from '@c/molecules/SwitchControl';
import byuLogoImage from '@p/byu/byu-logo.png';
import byuhLogoImage from '@p/byuh/byuh-logo.png';
import byuiLogoImage from '@p/byui/byui-logo.png';
import { CostData } from '@d';

export interface Props {
  rate: number;
}

export const CostTable: FC<Props> = ({ rate }: Props) => {
  const [isJPY, setIsJPY] = useState(true);
  const [isLDS, setIsLDS] = useState(true);
  const unit = isJPY ? '¥' : '$';
  const forex = isJPY ? rate : 1;
  const ldsRate = isLDS ? 1 : 2;

  return (
    <>
      <div className='flex flex-row space-x-4'>
        <SwitchControl
          checked={isJPY}
          onChange={setIsJPY}
          label='日本円'
          sr='Switch Currency'
        />
        <SwitchControl
          checked={isLDS}
          onChange={setIsLDS}
          label='教会員'
          sr='Switch Membership Status'
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
              <Digit>{CostData.byu.tuition * forex * ldsRate}</Digit>
            </td>
            <td>
              {unit}
              <Digit>{CostData.byuh.tuition * forex * ldsRate}</Digit>
            </td>
            <td>
              {unit}
              <Digit>{CostData.byui.tuition * forex * ldsRate}</Digit>
            </td>
          </tr>
          <tr>
            <th scope='row'>家賃と食費</th>
            <td>
              {unit}
              <Digit>{CostData.byu.housing * forex}</Digit>
            </td>
            <td>
              {unit}
              <Digit>{CostData.byuh.housing * forex}</Digit>
            </td>
            <td>
              {unit}
              <Digit>{CostData.byui.housing * forex}</Digit>
            </td>
          </tr>
          <tr>
            <th scope='row'>教科書費</th>
            <td>
              {unit}
              <Digit>{CostData.byu.books * forex}</Digit>
            </td>
            <td>
              {unit}
              <Digit>{CostData.byuh.books * forex}</Digit>
            </td>
            <td>
              {unit}
              <Digit>{CostData.byui.books * forex}</Digit>
            </td>
          </tr>
          <tr>
            <th scope='row'>生活費</th>
            <td>
              {unit}
              <Digit>{CostData.byu.personal * forex}</Digit>
            </td>
            <td>
              {unit}
              <Digit>{CostData.byuh.personal * forex}</Digit>
            </td>
            <td>
              {unit}
              <Digit>{CostData.byui.personal * forex}</Digit>
            </td>
          </tr>
          <tr>
            <th scope='row'>交通費</th>
            <td>
              {unit}
              <Digit>{CostData.byu.transportation * forex}</Digit>
            </td>
            <td>
              {unit}
              <Digit>{CostData.byuh.transportation * forex}</Digit>
            </td>
            <td>
              {unit}
              <Digit>{CostData.byui.transportation * forex}</Digit>
            </td>
          </tr>
          <tr>
            <th scope='row'>ローン費用</th>
            <td>
              {unit}
              <Digit>{CostData.byu.loan * forex}</Digit>
            </td>
            <td>
              {unit}
              <Digit>{CostData.byuh.loan * forex}</Digit>
            </td>
            <td>
              {unit}
              <Digit>{CostData.byui.loan * forex}</Digit>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope='row'>合計</th>
            <td>
              {unit}
              <Digit>
                {Object.values({
                  ...CostData.byu,
                  tuition: CostData.byu.tuition * ldsRate,
                }).reduce((accumulate, current) => accumulate + current) *
                  forex}
              </Digit>
            </td>
            <td>
              {unit}
              <Digit>
                {Object.values({
                  ...CostData.byuh,
                  tuition: CostData.byuh.tuition * ldsRate,
                }).reduce((accumulate, current) => accumulate + current) *
                  forex}
              </Digit>
            </td>
            <td>
              {unit}
              <Digit>
                {Object.values({
                  ...CostData.byui,
                  tuition: CostData.byui.tuition * ldsRate,
                }).reduce((accumulate, current) => accumulate + current) *
                  forex}
              </Digit>
            </td>
          </tr>
        </tfoot>
      </Table>
    </>
  );
};
