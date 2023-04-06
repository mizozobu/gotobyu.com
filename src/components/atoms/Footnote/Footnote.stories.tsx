import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { Footnote } from './Footnote';

export default {
  title: 'components/atoms/Footnote',
  component: Footnote,
  argTypes: {},
} as Meta<typeof Footnote>;

const Template: StoryFn<typeof Footnote> = (args) => <Footnote {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'item',
};
