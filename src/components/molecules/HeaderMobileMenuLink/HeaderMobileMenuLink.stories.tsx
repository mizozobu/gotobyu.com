import { CommandLineIcon } from '@heroicons/react/24/outline';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { HeaderMobileMenuLink } from './HeaderMobileMenuLink';

export default {
  title: 'components/molecules/HeaderMobileMenuLink',
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
  icon: CommandLineIcon,
};
