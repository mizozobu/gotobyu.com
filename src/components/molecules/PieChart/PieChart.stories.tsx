import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { PieChart } from './PieChart';

export default {
  title: 'molecules/PieChart',
  component: PieChart,
  argTypes: {},
} as ComponentMeta<typeof PieChart>;

const Template: ComponentStory<typeof PieChart> = (args) => (
  <PieChart {...args} />
);

export const Example = Template.bind({});
Example.args = {
  className: 'w-96 h-80',
  title: 'Title',
  data: {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
      },
    ],
  },
};
