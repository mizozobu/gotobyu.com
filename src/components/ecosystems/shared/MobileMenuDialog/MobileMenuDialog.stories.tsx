import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { MobileMenuDialog } from './MobileMenuDialog';

export default {
  title: 'ecosystems/MobileMenuDialog',
  component: MobileMenuDialog,
  argTypes: {},
} as ComponentMeta<typeof MobileMenuDialog>;

const Template: ComponentStory<typeof MobileMenuDialog> = (args) => (
  <MobileMenuDialog {...args} />
);

export const Example = Template.bind({});
Example.args = {
  isOpen: true,
  onClose: () => {
    alert('close');
  },
};
