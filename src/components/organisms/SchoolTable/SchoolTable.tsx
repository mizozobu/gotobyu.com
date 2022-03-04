import { Digit } from '@c/atoms/Digit';
import { NextImage } from '@c/atoms/NextImage';
import { Table } from '@c/atoms/Table';
import { TableCaption } from '@c/atoms/TableCaption';
import { SCHOOL_INFO } from '@d/school';
import byuLogoImage from '@p/byu/byu-logo.png';
import byuhLogoImage from '@p/byuh/byuh-logo.png';
import byuiLogoImage from '@p/byui/byui-logo.png';

export const SchoolTable = () => (
  <Table className='my-2 px-0'>
    <TableCaption description='BYU、BYUH、BYUIの学校データ(生徒数、留学生の割合、生徒と教職員の比率、専攻数)'>
      学校データ
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
        <th scope='row'>生徒数</th>
        <td>
          <Digit>{SCHOOL_INFO.byu.numberOfStudents}</Digit>
        </td>
        <td>
          <Digit>{SCHOOL_INFO.byuh.numberOfStudents}</Digit>
        </td>
        <td>
          <Digit>{SCHOOL_INFO.byui.numberOfStudents}</Digit>
        </td>
      </tr>
      <tr>
        <th scope='row'>留学生の割合</th>
        <td>
          <Digit decimals={2}>
            {SCHOOL_INFO.byu.numberOfInternationStudents}
          </Digit>
          %
        </td>
        <td>
          <Digit decimals={2}>
            {SCHOOL_INFO.byuh.numberOfInternationStudents}
          </Digit>
          %
        </td>
        <td>
          <Digit decimals={2}>
            {SCHOOL_INFO.byui.numberOfInternationStudents}
          </Digit>
          %
        </td>
      </tr>
      <tr>
        <th scope='row'>生徒と教職員の比率</th>
        <td>{SCHOOL_INFO.byu.studentToFaculty}</td>
        <td>{SCHOOL_INFO.byuh.studentToFaculty}</td>
        <td>{SCHOOL_INFO.byui.studentToFaculty}</td>
      </tr>
      <tr>
        <th scope='row'>専攻数</th>
        <td>
          <Digit>{SCHOOL_INFO.byu.numberOfMajors}</Digit>
        </td>
        <td>
          <Digit>{SCHOOL_INFO.byuh.numberOfMajors}</Digit>
        </td>
        <td>
          <Digit>{SCHOOL_INFO.byui.numberOfMajors}</Digit>
        </td>
      </tr>
    </tbody>
  </Table>
);
