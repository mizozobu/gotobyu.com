import { useState } from 'react';
import { Digit } from '@cmp/atoms/Digit';
import { Footnote } from '@cmp/atoms/Footnote';
import { NextImage } from '@cmp/atoms/NextImage';
import { Table } from '@cmp/atoms/Table';
import { TableCaption } from '@cmp/atoms/TableCaption';
import { SwitchControl } from '@cmp/molecules/SwitchControl';
import { COST_OF_ATTENDACE } from '@d';
import { Forex } from '@l/forex';
import { MDX } from '@l/mdx';
import byuLogoImage from '@p/byu/byu-logo.png';
import byuhLogoImage from '@p/byuh/byuh-logo.png';
import byuiLogoImage from '@p/byui/byui-logo.png';

interface Props {
  forex: Forex;
}

export const CostTable = ({ forex }: Props) => {
  const [isJPY, setIsJPY] = useState(true);
  const [isLDS, setIsLDS] = useState(true);
  const unit = isJPY ? '¥' : '$';
  const multiplier = isJPY ? forex.exrate : 1;
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
              <Digit>
                {COST_OF_ATTENDACE.byuh.transportation * multiplier}
              </Digit>
            </td>
            <td>
              {unit}
              <Digit>
                {COST_OF_ATTENDACE.byui.transportation * multiplier}
              </Digit>
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

      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <MDX.ul className='mt-4 text-xs'>
        <Footnote>
          {new Date(forex.timestamp).toLocaleString('ja-JP', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            timeZone: 'Asia/Tokyo',
          })}
          時点での為替レート$1=&yen;{forex.exrate}で換算
        </Footnote>
        <Footnote>BYU、BYUIは2学期分、BYUHは3学期分で換算</Footnote>
        <Footnote>
          日本国立、日本私立は
          <MDX.a href='https://www.mext.go.jp/a_menu/koutou/shinkou/07021403/__icsFiles/afieldfile/2017/12/26/1399613_03.pdf'>
            国公私立大学の授業料等の推移
          </MDX.a>
          より平成29年度の値
        </Footnote>
        <Footnote>
          US国立、US私立は
          <MDX.a href='https://www.usnews.com/education/best-colleges/paying-for-college/articles/paying-for-college-infographic'>
            See the Average College Tuition in 2020-2021
          </MDX.a>
          より
        </Footnote>
      </MDX.ul>
    </>
  );
};
