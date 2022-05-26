import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Footnote } from './Footnote';

export default {
  title: 'atoms/Footnote',
  component: Footnote,
  argTypes: {},
} as ComponentMeta<typeof Footnote>;

const Template: ComponentStory<typeof Footnote> = (args) => (
  <Footnote {...args} />
);

export const Example = Template.bind({});
Example.args = {
  children: 'item',
};
