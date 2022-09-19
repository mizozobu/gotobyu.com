import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { CirculatingCircles } from './CirculatingCircles';

export default {
  title: 'components/atoms/CirculatingCircles',
  component: CirculatingCircles,
  argTypes: {},
} as ComponentMeta<typeof CirculatingCircles>;

const Template: ComponentStory<typeof CirculatingCircles> = (args) => (
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
