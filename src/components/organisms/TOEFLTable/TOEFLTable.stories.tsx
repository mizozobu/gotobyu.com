import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { TOEFLTable } from './TOEFLTable';

export default {
  title: 'molecules/TOEFLTable',
  component: TOEFLTable,
  argTypes: {},
} as ComponentMeta<typeof TOEFLTable>;

const Template: ComponentStory<typeof TOEFLTable> = () => <TOEFLTable />;

export const Example = Template.bind({});
Example.args = {};
