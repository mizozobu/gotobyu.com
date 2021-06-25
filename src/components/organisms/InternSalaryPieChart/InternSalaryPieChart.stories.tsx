import React from 'react';
import { Story, Meta } from '@storybook/react';
import { InternSalaryPieChart, Props } from './InternSalaryPieChart';

export default {
  title: 'organisms/InternSalaryPieChart',
  component: InternSalaryPieChart,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <InternSalaryPieChart {...args} />;

export const Example = Template.bind({});
Example.args = {};
