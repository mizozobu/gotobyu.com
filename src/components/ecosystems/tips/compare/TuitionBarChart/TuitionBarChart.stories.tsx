import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { TuitionBarChart } from './TuitionBarChart';

export default {
  title: 'ecosystems/TuitionBarChart',
  component: TuitionBarChart,
  argTypes: {},
} as ComponentMeta<typeof TuitionBarChart>;

const Template: ComponentStory<typeof TuitionBarChart> = (args) => (
  <TuitionBarChart {...args} />
);

export const Example = Template.bind({});
Example.args = {
  exrate: 110,
  isJPY: true,
  isLDS: true,
};
