import { FC } from 'react';
import { DeadlineTable } from '@c/molecules/DeadlineTable';

export interface Props {}

const data = [
  {
    term: '2021年 冬学期',
    period: '1月初旬 ~ 4月中旬',
    openAt: '4/1',
    priorityClosedAt: '-',
    closedAt: ' 8/2',
    announcedAt: '8/30',
  },
  {
    term: '2022年 春学期',
    period: '4月下旬 ~ 6月中旬',
    openAt: '8/25',
    priorityClosedAt: '11/1',
    closedAt: ' 12/15',
    announcedAt: '2/21',
  },
  {
    term: '2022年 夏学期',
    period: '6月下旬 ~ 8月中旬',
    openAt: '8/25',
    priorityClosedAt: '11/1',
    closedAt: ' 12/15',
    announcedAt: '2/21',
  },
  {
    term: '2022年 秋学期',
    period: '9月初旬 ~ 12月中旬',
    openAt: '8/25',
    priorityClosedAt: '11/1',
    closedAt: ' 12/15',
    announcedAt: '2/21',
  },
];

export const BYUDeadlineTable: FC<Props> = () => <DeadlineTable data={data} />;
