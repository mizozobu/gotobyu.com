import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Item, Props } from './Item';

export default {
  title: 'atoms/Item',
  component: Item,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <Item {...args} />;

export const Example = Template.bind({});
Example.args = {};
