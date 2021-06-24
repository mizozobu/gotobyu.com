import React from 'react';
import { Story, Meta } from '@storybook/react';
import { List, Props } from './List';
import { Item } from './Item';

export default {
  title: 'Example/List',
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
