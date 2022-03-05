import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { CostTable } from './CostTable';

export default {
  title: 'ecosystems/CostTable',
  component: CostTable,
  argTypes: {},
} as ComponentMeta<typeof CostTable>;

const Template: ComponentStory<typeof CostTable> = (args) => (
  <CostTable {...args} />
);

export const Example = Template.bind({});
Example.args = {
  exrate: 110,
  isJPY: true,
  isLDS: true,
};
