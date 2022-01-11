import { Story, Meta } from '@storybook/react';
import React from 'react';
import { IncomeBarChart, Props } from './IncomeBarChart';

export default {
  title: 'organisms/IncomeBarChart',
  component: IncomeBarChart,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <IncomeBarChart {...args} />;

export const Example = Template.bind({});
Example.args = {};
