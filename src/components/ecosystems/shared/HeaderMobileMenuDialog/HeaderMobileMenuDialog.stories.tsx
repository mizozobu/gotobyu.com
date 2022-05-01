import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { HeaderMobileMenuDialog } from './HeaderMobileMenuDialog';

export default {
  title: 'ecosystems/HeaderMobileMenuDialog',
  component: HeaderMobileMenuDialog,
  argTypes: {},
} as ComponentMeta<typeof HeaderMobileMenuDialog>;

const Template: ComponentStory<typeof HeaderMobileMenuDialog> = (args) => (
  <HeaderMobileMenuDialog {...args} />
);

export const Example = Template.bind({});
Example.args = {
  isOpen: true,
};
