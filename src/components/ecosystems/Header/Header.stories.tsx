import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Header } from './Header';

export default {
  title: 'organisms/Header',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

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
