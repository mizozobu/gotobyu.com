import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Header } from './Header';

export default {
  title: 'ecosystems/Header',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Show = Template.bind({});
Show.args = {
  show: true,
  loading: false,
  isSearchAvailable: true,
};

export const Hide = Template.bind({});
Hide.args = {
  show: false,
  loading: false,
  isSearchAvailable: true,
};

export const Loading = Template.bind({});
Loading.args = {
  show: true,
  loading: true,
  isSearchAvailable: true,
};

export const SearchUnavailable = Template.bind({});
SearchUnavailable.args = {
  show: true,
  loading: false,
  isSearchAvailable: false,
};
