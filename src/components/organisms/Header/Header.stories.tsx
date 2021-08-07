import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Header, Props } from './Header';

export default {
  title: 'organisms/Header',
  component: Header,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <Header {...args} />;

export const Show = Template.bind({});
Show.args = {
  show: true,
  loading: false,
};

export const Hide = Template.bind({});
Hide.args = {
  show: false,
  loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
