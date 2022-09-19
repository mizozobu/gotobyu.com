import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { MdxContainer } from './MdxContainer';

export default {
  title: 'features/mdx/MdxContainer',
  component: MdxContainer,
  argTypes: {},
} as ComponentMeta<typeof MdxContainer>;

const Template: ComponentStory<typeof MdxContainer> = (args) => (
  <MdxContainer {...args} />
);

export const Example = Template.bind({});
Example.args = {
  children: 'Content',
};
