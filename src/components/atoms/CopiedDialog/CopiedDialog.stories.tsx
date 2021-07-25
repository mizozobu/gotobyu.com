import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CopiedDialog, Props } from './CopiedDialog';

export default {
  title: 'atoms/CopiedDialog',
  component: CopiedDialog,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <CopiedDialog {...args} />;

export const Example = Template.bind({});
Example.args = {
  isOpen: true,
  onClose: () => alert('close'),
};
