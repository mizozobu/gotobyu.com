import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { TableCaption } from './TableCaption';

export default {
  title: 'components/atoms/TableCaption',
  component: TableCaption,
  argTypes: {},
} as Meta<typeof TableCaption>;

const Template: StoryFn<typeof TableCaption> = (args) => (
  <table>
    <TableCaption {...args} />
  </table>
);

export const WithoutDescription = Template.bind({});
WithoutDescription.args = {
  children: 'table',
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  description: 'table description',
  children: 'table',
};
