import { Story, Meta } from '@storybook/react';
import React from 'react';
import { TableCaption, Props } from './TableCaption';

export default {
  title: 'atoms/TableCaption',
  component: TableCaption,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => (
  <table>
    <TableCaption {...args} />
  </table>
);

export const Example = Template.bind({});
Example.args = {
  children: 'table 1.1',
};
