import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { MdxContainer } from './MdxContainer';

export default {
  title: 'features/mdx/MdxContainer',
  component: MdxContainer,
  argTypes: {},
} as Meta<typeof MdxContainer>;

const Template: StoryFn<typeof MdxContainer> = (args) => (
  <MdxContainer {...args} />
);

export const Example = Template.bind({});
Example.args = {
  children: 'Content',
};
