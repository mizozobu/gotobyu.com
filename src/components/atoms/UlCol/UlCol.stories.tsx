import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { UlCol } from './UlCol';

export default {
  title: 'atoms/UlCol',
  component: UlCol,
  argTypes: {},
} as ComponentMeta<typeof UlCol>;

const Template: ComponentStory<typeof UlCol> = (args) => <UlCol {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'example',
};
