import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { CenterMiddleContainer } from './CenterMiddleContainer';

export default {
  title: 'components/atoms/CenterMiddleContainer',
  component: CenterMiddleContainer,
  argTypes: {},
} as ComponentMeta<typeof CenterMiddleContainer>;

const Template: ComponentStory<typeof CenterMiddleContainer> = (args) => (
  <CenterMiddleContainer {...args} />
);

export const Example = Template.bind({});
Example.args = {
  children: 'Content',
};
