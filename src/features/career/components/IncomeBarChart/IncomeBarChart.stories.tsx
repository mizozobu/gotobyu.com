import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { IncomeBarChart } from './IncomeBarChart';

export default {
  title: 'features/career/IncomeBarChart',
  component: IncomeBarChart,
  argTypes: {},
} as Meta<typeof IncomeBarChart>;

const Template: StoryFn<typeof IncomeBarChart> = () => <IncomeBarChart />;

export const Example = Template.bind({});
Example.args = {};
