import { Story, Meta } from '@storybook/react';
import React from 'react';
import { UlCol, Props } from './UlCol';

export default {
  title: 'atoms/UlCol',
  component: UlCol,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <UlCol {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'example',
};
