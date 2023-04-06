import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { HeaderMobileMenuDialog } from './HeaderMobileMenuDialog';

export default {
  title: 'components/organisms/HeaderMobileMenuDialog',
  component: HeaderMobileMenuDialog,
  argTypes: {},
} as Meta<typeof HeaderMobileMenuDialog>;

const Template: StoryFn<typeof HeaderMobileMenuDialog> = (args) => (
  <HeaderMobileMenuDialog {...args} />
);

export const Example = Template.bind({});
Example.args = {
  isOpen: true,
};
