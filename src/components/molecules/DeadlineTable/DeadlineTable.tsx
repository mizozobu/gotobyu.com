import { FC } from 'react';
import { Mark } from '@c/atoms/Mark';
import { Table } from '@c/atoms/Table';

export interface Props {
  data: {
    term: string;
    period: string;
    openAt: string | undefined;
    priorityClosedAt: string | undefined;
    closedAt: string | undefined;
    announcedAt: string | undefined;
  }[];
}

export const DeadlineTable: FC<Props> = ({ data }: Props) => (
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
              <Mark>{closedAt ?? '-'}</Mark>
            </td>
            <td>{announcedAt ?? '-'}</td>
          </tr>
        ),
      )}
    </tbody>
  </Table>
);
