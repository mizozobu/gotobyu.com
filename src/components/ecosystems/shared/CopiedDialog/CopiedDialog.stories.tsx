import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { CopiedDialog } from './CopiedDialog';

export default {
  title: 'ecosystems/CopiedDialog',
  component: CopiedDialog,
  argTypes: {},
} as ComponentMeta<typeof CopiedDialog>;

const Template: ComponentStory<typeof CopiedDialog> = (args) => (
  <CopiedDialog {...args} />
);

export const Example = Template.bind({});
Example.args = {
  isOpen: true,
};
