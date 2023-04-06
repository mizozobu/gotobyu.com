import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { InternSalaryPieChart } from './InternSalaryPieChart';

export default {
  title: 'features/internship/InternSalaryPieChart',
  component: InternSalaryPieChart,
  argTypes: {},
} as Meta<typeof InternSalaryPieChart>;

const Template: StoryFn<typeof InternSalaryPieChart> = (args) => (
  <InternSalaryPieChart {...args} />
);

export const Example = Template.bind({});
Example.args = {};
