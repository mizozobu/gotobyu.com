import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { PieChart } from './PieChart';

export default {
  title: 'components/molecules/PieChart',
  component: PieChart,
  argTypes: {},
} as ComponentMeta<typeof PieChart>;

const Template: ComponentStory<typeof PieChart> = (args) => (
  <div className='h-64 w-64'>
    <PieChart {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {
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

export const WithLabel = Template.bind({});
WithLabel.args = {
  ...Example.args,
  enableDataLable: true,
  labelCallback: (value: number) => `${value}%`,
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  ...Example.args,
  enableTooltip: true,
};
