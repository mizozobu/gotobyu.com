import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Item } from '@c/atoms/Item';
import { List, Props } from './List';

export default {
  title: 'atoms/List',
  component: List,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <List {...args} />;

export const Example = Template.bind({});
Example.args = {
  title: 'title here',
  children: (
    <>
      <Item>item 1</Item>
      <Item>item 2</Item>
      <Item>item 3</Item>
    </>
  ),
};
