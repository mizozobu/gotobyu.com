import { Story, Meta } from '@storybook/react';
import React from 'react';
import { EikenTable, Props } from './EikenTable';

export default {
  title: 'molecules/EikenTable',
  component: EikenTable,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <EikenTable {...args} />;

export const Example = Template.bind({});
Example.args = {};
