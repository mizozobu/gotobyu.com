import React from 'react';
import { Story, Meta } from '@storybook/react';
import { EikenTable, Props, data } from './EikenTable';

export default {
  title: 'molecules/EikenTable',
  component: EikenTable,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <EikenTable {...args} />;

export const Example = Template.bind({});
Example.args = {
  data,
};
