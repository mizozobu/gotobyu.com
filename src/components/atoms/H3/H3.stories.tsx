import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { H3 } from './H3';

export default {
  title: 'atoms/H3',
  component: H3,
  argTypes: {},
} as ComponentMeta<typeof H3>;

const Template: ComponentStory<typeof H3> = (args) => <H3 {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'example',
};
