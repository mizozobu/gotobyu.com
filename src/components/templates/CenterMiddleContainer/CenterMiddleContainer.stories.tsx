import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { CenterMiddleContainer } from './CenterMiddleContainer';

export default {
  title: 'templates/CenterMiddleContainer',
  component: CenterMiddleContainer,
  argTypes: {},
} as ComponentMeta<typeof CenterMiddleContainer>;

const Template: ComponentStory<typeof CenterMiddleContainer> = (args) => (
  <CenterMiddleContainer {...args} />
);

export const Example = Template.bind({});
Example.args = {
  children: 'example',
};
