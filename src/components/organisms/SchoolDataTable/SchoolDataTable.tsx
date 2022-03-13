import { Digit } from '@c/atoms/Digit';
import { Table } from '@c/atoms/Table';
import { TableCaption } from '@c/atoms/TableCaption';
import { SchoolTh } from '@c/molecules/SchoolTh';
import { SCHOOL_INFO } from '@d/school';

/**
 * Table for school data
 */
export const SchoolDataTable = (): JSX.Element => (
  <Table>
    <TableCaption description='BYU、BYUH、BYUIの学校データ(生徒数、留学生の割合、生徒と教職員の比率、専攻数)'>
      学校データ
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
          <Digit decimals={2}>{SCHOOL_INFO.byu.internationStudentRatio}</Digit>%
        </td>
        <td>
          <Digit decimals={2}>{SCHOOL_INFO.byuh.internationStudentRatio}</Digit>
          %
        </td>
        <td>
          <Digit decimals={2}>{SCHOOL_INFO.byui.internationStudentRatio}</Digit>
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
