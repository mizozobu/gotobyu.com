import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { PTETable } from './PTETable';

export default {
  title: 'molecules/PTETable',
  component: PTETable,
  argTypes: {},
} as ComponentMeta<typeof PTETable>;

const Template: ComponentStory<typeof PTETable> = () => <PTETable />;

export const Example = Template.bind({});
Example.args = {};
