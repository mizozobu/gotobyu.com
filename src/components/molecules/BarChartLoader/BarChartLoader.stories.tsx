import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { BarChartLoader } from './BarChartLoader';

export default {
  title: 'molecules/BarChartLoader',
  component: BarChartLoader,
  argTypes: {},
} as ComponentMeta<typeof BarChartLoader>;

const Template: ComponentStory<typeof BarChartLoader> = (args) => (
  <BarChartLoader {...args} className='h-32 w-64' />
);

export const Example = Template.bind({});
Example.args = {};
