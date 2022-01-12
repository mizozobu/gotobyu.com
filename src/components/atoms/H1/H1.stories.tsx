import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { H1 } from './H1';

export default {
  title: 'atoms/H1',
  component: H1,
  argTypes: {},
} as ComponentMeta<typeof H1>;

const Template: ComponentStory<typeof H1> = (args) => <H1 {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'example',
};
