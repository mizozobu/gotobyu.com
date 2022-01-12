import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { TableCaption } from './TableCaption';

export default {
  title: 'atoms/TableCaption',
  component: TableCaption,
  argTypes: {},
} as ComponentMeta<typeof TableCaption>;

const Template: ComponentStory<typeof TableCaption> = (args) => (
  <table>
    <TableCaption {...args} />
  </table>
);

export const Example = Template.bind({});
Example.args = {
  children: 'table 1.1',
};
