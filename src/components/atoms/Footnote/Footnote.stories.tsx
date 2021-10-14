import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Footnote, Props } from './Footnote';

export default {
  title: 'atoms/Footnote',
  component: Footnote,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <Footnote {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'example',
};
