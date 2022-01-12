import { Strong } from '@cmp/atoms/Strong';
import { Table } from '@cmp/atoms/Table';
import type { ApplicationDeadline } from '@d';

interface Props {
  data: ApplicationDeadline[];
}

export const DeadlineTable = ({ data }: Props) => (
  <Table>
    <thead>
      <tr>
        <th scope='col'>{}</th>
        <th scope='col'>学期期間</th>
        <th scope='col'>申込開始</th>
        <th scope='col'>優先申込締切</th>
        <th scope='col'>申込締切</th>
        <th scope='col'>合格発表</th>
      </tr>
    </thead>
    <tbody>
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
