import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CostTable, Props } from './CostTable';

export default {
  title: 'organisms/CostTable',
  component: CostTable,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <CostTable {...args} />;

export const Example = Template.bind({});
Example.args = {
  rate: 110,
};
