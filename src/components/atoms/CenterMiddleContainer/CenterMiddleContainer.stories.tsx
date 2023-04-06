import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { CenterMiddleContainer } from './CenterMiddleContainer';

export default {
  title: 'components/atoms/CenterMiddleContainer',
  component: CenterMiddleContainer,
  argTypes: {},
} as Meta<typeof CenterMiddleContainer>;

const Template: StoryFn<typeof CenterMiddleContainer> = (args) => (
  <CenterMiddleContainer {...args} />
);

export const Example = Template.bind({});
Example.args = {
  children: 'Content',
};
