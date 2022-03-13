import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { SchoolDataTable } from './SchoolDataTable';

export default {
  title: 'organisms/SchoolDataTable',
  component: SchoolDataTable,
  argTypes: {},
} as ComponentMeta<typeof SchoolDataTable>;

const Template: ComponentStory<typeof SchoolDataTable> = () => (
  <SchoolDataTable />
);

export const Example = Template.bind({});
Example.args = {};
