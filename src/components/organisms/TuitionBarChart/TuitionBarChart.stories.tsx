import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TuitionBarChart, Props } from './TuitionBarChart';

export default {
  title: 'organisms/TuitionBarChart',
  component: TuitionBarChart,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <TuitionBarChart {...args} />;

export const Example = Template.bind({});
Example.args = {};
