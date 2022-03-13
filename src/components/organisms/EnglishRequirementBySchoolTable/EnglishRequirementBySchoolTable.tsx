import { Table } from '@c/atoms/Table';
import { TableCaption } from '@c/atoms/TableCaption';
import type { EnglishExamCollection } from '@d/english-requirement';

/**
 * Props for {@link EnglishRequirementBySchoolTable}
 */
interface Props {
  /** School name */
  school: string;
  /** Score data for each exam */
  data: EnglishExamCollection;
}

/**
 * Table to compare the english requirement for each school
 */
export const EnglishRequirementBySchoolTable = ({
  school,
  data,
}: Props): JSX.Element => (
  <Table>
    <TableCaption
      description={`${school}の入学に必要なスコア(TOEFL、IELTS、PTE、英検)`}
    >
      {school}の入学に必要なスコア
    </TableCaption>
    <thead data-noindex='true'>
      <tr>
        <th scope='col'>{}</th>
        <th scope='col'>TOEFL</th>
        <th scope='col'>IELTS</th>
        <th scope='col'>PTE</th>
        <th scope='col'>英検</th>
      </tr>
    </thead>
    <tbody data-noindex='true'>
      <tr>
        <th scope='row'>Reading</th>
        <td>{data.TOEFL.reading ?? '-'}</td>
        <td>{data.IELTS.reading ?? '-'}</td>
        <td>{data.PTE.reading ?? '-'}</td>
        <td>{data.EIKEN.reading ?? '-'}</td>
      </tr>
      <tr>
        <th scope='row'>Writing</th>
        <td>{data.TOEFL.writing ?? '-'}</td>
        <td>{data.IELTS.writing ?? '-'}</td>
        <td>{data.PTE.writing ?? '-'}</td>
        <td>{data.EIKEN.writing ?? '-'}</td>
      </tr>
      <tr>
        <th scope='row' className='px-24'>
          Speaking
        </th>
        <td>{data.TOEFL.speaking ?? '-'}</td>
        <td>{data.IELTS.speaking ?? '-'}</td>
        <td>{data.PTE.speaking ?? '-'}</td>
        <td>{data.EIKEN.speaking ?? '-'}</td>
      </tr>
      <tr>
        <th scope='row' className='px-24'>
          Listening
        </th>
        <td>{data.TOEFL.listening ?? '-'}</td>
        <td>{data.IELTS.listening ?? '-'}</td>
        <td>{data.PTE.listening ?? '-'}</td>
        <td>{data.EIKEN.listening ?? '-'}</td>
      </tr>
    </tbody>
    <tfoot data-noindex='true'>
      <tr>
        <th scope='row' className='px-24'>
          合計
        </th>
        <td>{data.TOEFL.total ?? '-'}</td>
        <td>{data.IELTS.total ?? '-'}</td>
        <td>{data.PTE.total ?? '-'}</td>
        <td>{data.EIKEN.total ?? '-'}</td>
      </tr>
    </tfoot>
  </Table>
);
