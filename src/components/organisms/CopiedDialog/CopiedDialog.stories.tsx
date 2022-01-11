import { Story, Meta } from '@storybook/react';
import React from 'react';
import { CopiedDialog, Props } from './CopiedDialog';

export default {
  title: 'organisms/CopiedDialog',
  component: CopiedDialog,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <CopiedDialog {...args} />;

export const Example = Template.bind({});
Example.args = {
  isOpen: true,
  onClose: () => alert('close'),
};
