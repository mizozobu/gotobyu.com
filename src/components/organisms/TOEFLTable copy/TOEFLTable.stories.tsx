import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TOEFLTable, Props, data } from './TOEFLTable';

export default {
  title: 'molecules/TOEFLTable',
  component: TOEFLTable,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <TOEFLTable {...args} />;

export const Example = Template.bind({});
Example.args = {
  data,
};
