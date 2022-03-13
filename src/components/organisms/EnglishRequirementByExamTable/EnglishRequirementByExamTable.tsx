import { Digit } from '@c/atoms/Digit';
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
  /** Whether to show "Use of English" row (for Cambridge English) */
  withUseOfEnglish?: boolean;
}

/**
 * Table to compare the english requirement for each school
 */
export const EnglishRequirementByExamTable = ({
  exam,
  withUseOfEnglish = false,
  data,
}: Props): JSX.Element => {
  const renderScore = (score: number | string): string | JSX.Element => {
    if (typeof score === 'number') return <Digit>{score}</Digit>;
    return score;
  };

  return (
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
          <td>{renderScore(data.byu.reading)}</td>
          <td>{renderScore(data.byuh.reading)}</td>
          <td>{renderScore(data.byui.reading)}</td>
        </tr>
        <tr>
          <th scope='row'>Writing</th>
          <td>{renderScore(data.byu.writing)}</td>
          <td>{renderScore(data.byuh.writing)}</td>
          <td>{renderScore(data.byui.writing)}</td>
        </tr>
        <tr>
          <th scope='row' className='px-24'>
            Speaking
          </th>
          <td>{renderScore(data.byu.speaking)}</td>
          <td>{renderScore(data.byuh.speaking)}</td>
          <td>{renderScore(data.byui.speaking)}</td>
        </tr>
        <tr>
          <th scope='row' className='px-24'>
            Listening
          </th>
          <td>{renderScore(data.byu.listening)}</td>
          <td>{renderScore(data.byuh.listening)}</td>
          <td>{renderScore(data.byui.listening)}</td>
        </tr>
        {withUseOfEnglish && (
          <tr>
            <th scope='row' className='px-24'>
              Use of English
            </th>
            <td>{renderScore(data.byu.useOfEnglish)}</td>
            <td>{renderScore(data.byuh.useOfEnglish)}</td>
            <td>{renderScore(data.byui.useOfEnglish)}</td>
          </tr>
        )}
      </tbody>
      <tfoot data-noindex='true'>
        <tr>
          <th scope='row' className='px-24'>
            合計
          </th>
          <td>{renderScore(data.byu.total)}</td>
          <td>{renderScore(data.byuh.total)}</td>
          <td>{renderScore(data.byui.total)}</td>
        </tr>
      </tfoot>
    </Table>
  );
};
