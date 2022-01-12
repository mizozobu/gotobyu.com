import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { IncomeBarChart } from './IncomeBarChart';

export default {
  title: 'organisms/IncomeBarChart',
  component: IncomeBarChart,
  argTypes: {},
} as ComponentMeta<typeof IncomeBarChart>;

const Template: ComponentStory<typeof IncomeBarChart> = (args) => (
  <IncomeBarChart {...args} />
);

export const Example = Template.bind({});
Example.args = {};
