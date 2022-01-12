import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { EikenTable } from './EikenTable';

export default {
  title: 'molecules/EikenTable',
  component: EikenTable,
  argTypes: {},
} as ComponentMeta<typeof EikenTable>;

const Template: ComponentStory<typeof EikenTable> = () => <EikenTable />;

export const Example = Template.bind({});
Example.args = {};
