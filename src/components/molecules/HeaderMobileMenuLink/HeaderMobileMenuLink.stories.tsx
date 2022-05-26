import { TerminalIcon } from '@heroicons/react/outline';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { HeaderMobileMenuLink } from './HeaderMobileMenuLink';

export default {
  title: 'molecules/HeaderMobileMenuLink',
  component: HeaderMobileMenuLink,
  argTypes: {},
} as ComponentMeta<typeof HeaderMobileMenuLink>;

const Template: ComponentStory<typeof HeaderMobileMenuLink> = (args) => (
  <HeaderMobileMenuLink {...args} />
);

export const Example = Template.bind({});
Example.args = {
  name: 'link',
  href: '/link',
  icon: TerminalIcon,
};
