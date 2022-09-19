import { Digit } from '@/components/atoms/Digit';
import { Table } from '@/components/atoms/Table';
import { TableCaption } from '@/components/atoms/TableCaption';
import type { EnglishExamCollection } from '@/data/english-requirement';

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
}: Props): JSX.Element => {
  /**
   * Format score or text
   * - score: add comma
   * - text: as is
   * @param score Score or text
   * @returns Formatted score node or text
   */
  const renderScore = (score: number | string): string | JSX.Element => {
    if (typeof score === 'number') return <Digit>{score}</Digit>;
    return score;
  };

  return (
    <Table>
      <TableCaption
        description={`${school}の入学に必要なスコア(TOEFL(iBT)、IELTS、PTE、Cambridge English、英検)`}
      >
        {school}の入学に必要なスコア
      </TableCaption>
      <thead data-noindex='true'>
        <tr>
          <th scope='col'>{}</th>
          <th scope='col'>TOEFL(iBT)</th>
          <th scope='col'>IELTS</th>
          <th scope='col'>PTE</th>
          <th scope='col'>Cambridge English</th>
          <th scope='col'>英検</th>
        </tr>
      </thead>
      <tbody data-noindex='true'>
        <tr>
          <th scope='row'>Reading</th>
          <td>{renderScore(data.TOEFL.reading)}</td>
          <td>{renderScore(data.IELTS.reading)}</td>
          <td>{renderScore(data.PTE.reading)}</td>
          <td>{renderScore(data.cambridge.reading)}</td>
          <td>{renderScore(data.eiken.reading)}</td>
        </tr>
        <tr>
          <th scope='row'>Writing</th>
          <td>{renderScore(data.TOEFL.writing)}</td>
          <td>{renderScore(data.IELTS.writing)}</td>
          <td>{renderScore(data.PTE.writing)}</td>
          <td>{renderScore(data.cambridge.writing)}</td>
          <td>{renderScore(data.eiken.writing)}</td>
        </tr>
        <tr>
          <th scope='row' className='px-24'>
            Speaking
          </th>
          <td>{renderScore(data.TOEFL.speaking)}</td>
          <td>{renderScore(data.IELTS.speaking)}</td>
          <td>{renderScore(data.PTE.speaking)}</td>
          <td>{renderScore(data.cambridge.speaking)}</td>
          <td>{renderScore(data.eiken.speaking)}</td>
        </tr>
        <tr>
          <th scope='row' className='px-24'>
            Listening
          </th>
          <td>{renderScore(data.TOEFL.listening)}</td>
          <td>{renderScore(data.IELTS.listening)}</td>
          <td>{renderScore(data.PTE.listening)}</td>
          <td>{renderScore(data.cambridge.listening)}</td>
          <td>{renderScore(data.eiken.listening)}</td>
        </tr>
      </tbody>
      <tfoot data-noindex='true'>
        <tr>
          <th scope='row' className='px-24'>
            合計
          </th>
          <td>{renderScore(data.TOEFL.total)}</td>
          <td>{renderScore(data.IELTS.total)}</td>
          <td>{renderScore(data.PTE.total)}</td>
          <td>{renderScore(data.cambridge.total)}</td>
          <td>{renderScore(data.eiken.total)}</td>
        </tr>
      </tfoot>
    </Table>
  );
};
