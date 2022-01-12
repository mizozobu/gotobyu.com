import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { H2 } from './H2';

export default {
  title: 'atoms/H2',
  component: H2,
  argTypes: {},
} as ComponentMeta<typeof H2>;

const Template: ComponentStory<typeof H2> = (args) => <H2 {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'example',
};
