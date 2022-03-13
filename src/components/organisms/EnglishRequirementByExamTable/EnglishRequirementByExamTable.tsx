import { Table } from '@c/atoms/Table';
import { TableCaption } from '@c/atoms/TableCaption';
import { SchoolTh } from '@c/molecules/SchoolTh';
import type { EnglishRequirement } from '@d/english-requirement';
import type { SchoolDataCollection } from '@d/school';

/**
 * Props for {@link EnglishRequirementByExamTable}
 */
interface Props {
  /** Exam name */
  exam: string;
  /** Score data for each school */
  data: SchoolDataCollection<EnglishRequirement>;
}

/**
 * Table to compare the english requirement for each school
 */
export const EnglishRequirementByExamTable = ({
  exam,
  data,
}: Props): JSX.Element => (
  <Table>
    <TableCaption
      description={`BYU、BYUH、BYUIの入学に必要な${exam}のスコア(Reading、Writing、Speaking、Listening、合計)`}
    >
      入学に必要な{exam}のスコア
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
        <th scope='row'>Reading</th>
        <td>{data.byu.reading ?? '-'}</td>
        <td>{data.byuh.reading ?? '-'}</td>
        <td>{data.byui.reading ?? '-'}</td>
      </tr>
      <tr>
        <th scope='row'>Writing</th>
        <td>{data.byu.writing ?? '-'}</td>
        <td>{data.byuh.writing ?? '-'}</td>
        <td>{data.byui.writing ?? '-'}</td>
      </tr>
      <tr>
        <th scope='row' className='px-24'>
          Speaking
        </th>
        <td>{data.byu.speaking ?? '-'}</td>
        <td>{data.byuh.speaking ?? '-'}</td>
        <td>{data.byui.speaking ?? '-'}</td>
      </tr>
      <tr>
        <th scope='row' className='px-24'>
          Listening
        </th>
        <td>{data.byu.listening ?? '-'}</td>
        <td>{data.byuh.listening ?? '-'}</td>
        <td>{data.byui.listening ?? '-'}</td>
      </tr>
    </tbody>
    <tfoot data-noindex='true'>
      <tr>
        <th scope='row' className='px-24'>
          合計
        </th>
        <td>{data.byu.total ?? '-'}</td>
        <td>{data.byuh.total ?? '-'}</td>
        <td>{data.byui.total ?? '-'}</td>
      </tr>
    </tfoot>
  </Table>
);
