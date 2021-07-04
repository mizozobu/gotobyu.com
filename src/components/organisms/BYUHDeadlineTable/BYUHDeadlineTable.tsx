import { FC } from 'react';
import { DeadlineTable } from '@c/molecules/DeadlineTable';

export interface Props {}

const data = [
  {
    term: '秋学期',
    period: '9月初旬 ~ 12月中旬',
    openAt: '9/1',
    priorityClosedAt: '-',
    closedAt: '3/1',
    announcedAt: '3月',
  },
  {
    term: '冬学期',
    period: '1月初旬 ~ 4月中旬',
    openAt: '2/1',
    priorityClosedAt: '-',
    closedAt: '7/1',
    announcedAt: '8月',
  },
  {
    term: '春学期',
    period: '4月下旬 ~ 6月下旬',
    openAt: '7/1',
    priorityClosedAt: '-',
    closedAt: '11/1',
    announcedAt: '12月',
  },
];

export const BYUHDeadlineTable: FC<Props> = () => <DeadlineTable data={data} />;
