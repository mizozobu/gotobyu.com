import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { SchoolTable } from './SchoolTable';

export default {
  title: 'organisms/SchoolTable',
  component: SchoolTable,
  argTypes: {},
} as ComponentMeta<typeof SchoolTable>;

const Template: ComponentStory<typeof SchoolTable> = () => <SchoolTable />;

export const Example = Template.bind({});
Example.args = {};
