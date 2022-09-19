import { Strong } from '@/components/atoms/Strong';
import { Table } from '@/components/atoms/Table';
import { TableCaption } from '@/components/atoms/TableCaption';
import type { ApplicationDeadline } from '@/data/application-deadline';

/**
 * Props for {@link DeadlineTable}
 */
interface Props {
  /** School name */
  school: string;
  /** Deadline data */
  data: ApplicationDeadline[];
}

/**
 * Table to compare application deadline for each school
 */
export const DeadlineTable = ({ school, data }: Props): JSX.Element => (
  <Table>
    <TableCaption
      description={`${school}の学期期間、申込開始、優先申込締切、申込締切、合格発表`}
    >
      {school}の申込締切
    </TableCaption>
    <thead data-noindex='true'>
      <tr>
        <th scope='col'>{}</th>
        <th scope='col'>学期期間</th>
        <th scope='col'>申込開始</th>
        <th scope='col'>優先申込締切</th>
        <th scope='col'>申込締切</th>
        <th scope='col'>合格発表</th>
      </tr>
    </thead>
    <tbody data-noindex='true'>
      {data.map(
        ({ term, period, openAt, priorityClosedAt, closedAt, announcedAt }) => (
          <tr key={term}>
            <th scope='row'>{term}</th>
            <td>{period}</td>
            <td>{openAt ?? '-'}</td>
            <td>{priorityClosedAt ?? '-'}</td>
            <td>
              <Strong>{closedAt ?? '-'}</Strong>
            </td>
            <td>{announcedAt ?? '-'}</td>
          </tr>
        ),
      )}
    </tbody>
  </Table>
);
