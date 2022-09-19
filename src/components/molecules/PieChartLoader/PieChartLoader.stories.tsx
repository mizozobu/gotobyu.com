import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { PieChartLoader } from './PieChartLoader';

export default {
  title: 'components/molecules/PieChartLoader',
  component: PieChartLoader,
  argTypes: {},
} as ComponentMeta<typeof PieChartLoader>;

const Template: ComponentStory<typeof PieChartLoader> = (args) => (
  <div className='h-64 w-96'>
    <PieChartLoader {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {};
