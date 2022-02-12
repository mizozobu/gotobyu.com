import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { PieChartLoader } from './PieChartLoader';

export default {
  title: 'molecules/PieChartLoader',
  component: PieChartLoader,
  argTypes: {},
} as ComponentMeta<typeof PieChartLoader>;

const Template: ComponentStory<typeof PieChartLoader> = (args) => (
  <PieChartLoader {...args} className='w-64' />
);

export const Example = Template.bind({});
Example.args = {};
