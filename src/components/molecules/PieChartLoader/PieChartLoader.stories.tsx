import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { PieChartLoader } from './PieChartLoader';

export default {
  title: 'components/molecules/PieChartLoader',
  component: PieChartLoader,
  argTypes: {},
} as Meta<typeof PieChartLoader>;

const Template: StoryFn<typeof PieChartLoader> = (args) => (
  <div className='h-64 w-96'>
    <PieChartLoader {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {};
