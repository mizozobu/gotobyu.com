import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { CirculatingCircles } from './CirculatingCircles';

export default {
  title: 'components/atoms/CirculatingCircles',
  component: CirculatingCircles,
  argTypes: {},
} as Meta<typeof CirculatingCircles>;

const Template: StoryFn<typeof CirculatingCircles> = (args) => (
  <div className='w-48'>
    <CirculatingCircles {...args} />
  </div>
);

export const Static = Template.bind({});
Static.args = {};

export const Animated = Template.bind({});
Animated.args = {
  animated: true,
};
