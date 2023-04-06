import type { StoryFn, Meta } from '@storybook/react';
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
} as Meta<typeof TuitionBarChart>;

const Template: StoryFn<typeof TuitionBarChart> = (args) => (
  <TuitionBarChart {...args} />
);

export const Example = Template.bind({});
Example.args = {};
