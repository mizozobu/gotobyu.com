import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { BarChartLoader } from './BarChartLoader';

export default {
  title: 'molecules/BarChartLoader',
  component: BarChartLoader,
  argTypes: {},
} as ComponentMeta<typeof BarChartLoader>;

const Template: ComponentStory<typeof BarChartLoader> = (args) => (
  <div className='h-64 w-96'>
    <BarChartLoader {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {
  barCount: 9,
};
