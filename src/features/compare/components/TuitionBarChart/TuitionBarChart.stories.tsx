import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { TuitionBarChart } from './TuitionBarChart';

export default {
  title: 'features/compare/TuitionBarChart',
  component: TuitionBarChart,
  argTypes: {},
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
} as ComponentMeta<typeof TuitionBarChart>;

const Template: ComponentStory<typeof TuitionBarChart> = (args) => (
  <TuitionBarChart {...args} />
);

export const Example = Template.bind({});
Example.args = {};
