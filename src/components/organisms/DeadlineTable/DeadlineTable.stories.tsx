import type { Meta, StoryObj } from '@storybook/react';
import { DeadlineTable } from './DeadlineTable';

const meta = {
  title: 'components/organisms/DeadlineTable',
  component: DeadlineTable,
  argTypes: {},
} satisfies Meta<typeof DeadlineTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    school: 'BYUI',
    data: [
      {
        term: '秋学期',
        period: '9月中旬 ~ 12月中旬',
        openAt: '常時可',
        priorityClosedAt: '5/1',
        closedAt: '7/1',
        announcedAt: '申込後4週間以内',
      },
      {
        term: '冬学期',
        period: '1月初旬 ~ 4月初旬',
        openAt: '常時可',
        priorityClosedAt: '8/15',
        closedAt: '10/15',
        announcedAt: '申込後4週間以内',
      },
      {
        term: '春学期',
        period: '4月下旬 ~ 7月下旬',
        openAt: '常時可',
        priorityClosedAt: '12/1',
        closedAt: '2/1',
        announcedAt: '申込後4週間以内',
      },
    ],
  },
};
