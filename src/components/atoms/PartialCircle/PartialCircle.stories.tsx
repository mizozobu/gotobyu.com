import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { PartialCircle } from './PartialCircle';

export default {
  title: 'components/atoms/PartialCircle',
  component: PartialCircle,
  argTypes: {},
} as Meta<typeof PartialCircle>;

const Template: StoryFn<typeof PartialCircle> = (args) => {
  const { r } = args;
  return (
    <svg height='100' width='100' viewBox='0 0 100 100'>
      <g transform={`translate(${r}, ${r})`}>
        <PartialCircle {...args} />
      </g>
    </svg>
  );
};

export const Example = Template.bind({});
Example.args = {
  r: 50,
  angle: 240,
};
