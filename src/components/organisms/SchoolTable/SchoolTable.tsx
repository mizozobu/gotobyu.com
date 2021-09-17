import { FC } from 'react';
import { Table } from '@c/atoms/Table';
import { TableCaption } from '@c/atoms/TableCaption';
import { Digit } from '@c/atoms/Digit';
import { NextImage } from '@c/atoms/NextImage';
import byuLogoImage from '@p/byu.png';
import byuhLogoImage from '@p/byuh.png';
import byuiLogoImage from '@p/byui.png';
import { SchoolData } from '@d';

export interface Props {}

export const SchoolTable: FC<Props> = () => (
  <Table className='my-2 px-0'>
    <TableCaption>学校データ</TableCaption>
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
        <th scope='row'>生徒数</th>
        <td>
          <Digit>{SchoolData.byu.numberOfStudents}</Digit>
        </td>
        <td>
          <Digit>{SchoolData.byuh.numberOfStudents}</Digit>
        </td>
        <td>
          <Digit>{SchoolData.byui.numberOfStudents}</Digit>
        </td>
      </tr>
      <tr>
        <th scope='row'>留学生割合</th>
        <td>
          <Digit decimals={2}>
            {SchoolData.byu.numberOfInternationStudents}
          </Digit>
          %
        </td>
        <td>
          <Digit decimals={2}>
            {SchoolData.byuh.numberOfInternationStudents}
          </Digit>
          %
        </td>
        <td>
          <Digit decimals={2}>
            {SchoolData.byui.numberOfInternationStudents}
          </Digit>
          %
        </td>
      </tr>
      <tr>
        <th scope='row'>生徒と教職員の比率</th>
        <td>{SchoolData.byu.studentToFaculty}</td>
        <td>{SchoolData.byuh.studentToFaculty}</td>
        <td>{SchoolData.byui.studentToFaculty}</td>
      </tr>
      <tr>
        <th scope='row'>専攻数</th>
        <td>
          <Digit>{SchoolData.byu.numberOfMajors}</Digit>
        </td>
        <td>
          <Digit>{SchoolData.byuh.numberOfMajors}</Digit>
        </td>
        <td>
          <Digit>{SchoolData.byui.numberOfMajors}</Digit>
        </td>
      </tr>
    </tbody>
  </Table>
);
