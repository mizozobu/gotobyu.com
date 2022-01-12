import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { BarChart } from './BarChart';

export default {
  title: 'molecules/BarChart',
  component: BarChart,
  argTypes: {},
} as ComponentMeta<typeof BarChart>;

const Template: ComponentStory<typeof BarChart> = (args) => (
  <BarChart {...args} />
);

export const Example = Template.bind({});
Example.args = {
  className: 'w-96 h-80',
  title: 'Title',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
      },
    ],
  },
};
