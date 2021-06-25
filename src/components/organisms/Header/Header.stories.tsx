import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Header, Props } from './Header';

export default {
  title: 'organisms/Header',
  component: Header,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <Header {...args} />;

export const Example = Template.bind({});
Example.args = {};
