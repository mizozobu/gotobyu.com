'use client';

import { useRecoilValue } from 'recoil';
import { Digit } from '@/components/atoms/Digit';
import { Table } from '@/components/atoms/Table';
import { TableCaption } from '@/components/atoms/TableCaption';
import { SchoolTh } from '@/components/molecules/SchoolTh';
import { COST_OF_ATTENDACE } from '@/data/cost-of-attendance';
import { statsState, CURRENCY } from '@/features/stats';

interface Props {
  exrate: number;
  // getServerProps: () => Promise<{ exrate: number; timestamp: string }>;
}

/**
 * Table to compare the cost of attendance for each school
 */
export const CostTable = ({ exrate }: Props): JSX.Element => {
  const { currency, isLDS } = useRecoilValue(statsState);
  const isJPY = currency === CURRENCY.JPY;
  const unit = isJPY ? '¥' : '$';
  const multiplier = isJPY ? exrate : 1;
  const ldsRate = isLDS ? 1 : 2;

  return (
    <Table>
      <TableCaption description='BYU、BYUH、BYUIの1学期の費用(学費、家賃と食費、教科書費、生活費、交通費、ローン費用)'>
        1学期の費用({isJPY ? '円' : 'ドル'})
      </TableCaption>
      <thead data-noindex='true'>
        <tr>
          <th scope='col'>{}</th>
          <SchoolTh.BYU />
          <SchoolTh.BYUH />
          <SchoolTh.BYUI />
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
