import { Story, Meta } from '@storybook/react';
import React from 'react';
import { P, Props } from './P';

export default {
  title: 'atoms/P',
  component: P,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <P {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'example',
};
