import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { TuitionBarChart } from './TuitionBarChart';

export default {
  title: 'organisms/TuitionBarChart',
  component: TuitionBarChart,
  argTypes: {},
} as ComponentMeta<typeof TuitionBarChart>;

const Template: ComponentStory<typeof TuitionBarChart> = (args) => (
  <TuitionBarChart {...args} />
);

export const Example = Template.bind({});
Example.args = {
  forex: {
    exrate: 110,
    timestamp: new Date().toISOString(),
  },
};
