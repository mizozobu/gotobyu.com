import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { PartialCircle } from './PartialCircle';

export default {
  title: 'atoms/PartialCircle',
  component: PartialCircle,
  argTypes: {},
} as ComponentMeta<typeof PartialCircle>;

const Template: ComponentStory<typeof PartialCircle> = (args) => {
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
