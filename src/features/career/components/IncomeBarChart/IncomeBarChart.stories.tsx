import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { IncomeBarChart } from './IncomeBarChart';

export default {
  title: 'features/career/IncomeBarChart',
  component: IncomeBarChart,
  argTypes: {},
} as ComponentMeta<typeof IncomeBarChart>;

const Template: ComponentStory<typeof IncomeBarChart> = () => (
  <IncomeBarChart />
);

export const Example = Template.bind({});
Example.args = {};
