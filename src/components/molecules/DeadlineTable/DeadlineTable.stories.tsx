import React from 'react';
import { Story, Meta } from '@storybook/react';
import { DeadlineTable, Props } from './DeadlineTable';

export default {
  title: 'molecules/DeadlineTable',
  component: DeadlineTable,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <DeadlineTable {...args} />;

export const Example = Template.bind({});
Example.args = {
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
};
