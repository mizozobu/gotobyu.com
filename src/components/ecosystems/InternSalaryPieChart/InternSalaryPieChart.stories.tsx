import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { InternSalaryPieChart } from './InternSalaryPieChart';

export default {
  title: 'organisms/InternSalaryPieChart',
  component: InternSalaryPieChart,
  argTypes: {},
} as ComponentMeta<typeof InternSalaryPieChart>;

const Template: ComponentStory<typeof InternSalaryPieChart> = (args) => (
  <InternSalaryPieChart {...args} />
);

export const Example = Template.bind({});
Example.args = {};
