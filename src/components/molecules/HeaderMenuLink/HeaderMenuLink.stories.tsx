import { TerminalIcon } from '@heroicons/react/outline';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { HeaderMenuLink } from './HeaderMenuLink';

export default {
  title: 'molecules/HeaderMenuLink',
  component: HeaderMenuLink,
  argTypes: {},
} as ComponentMeta<typeof HeaderMenuLink>;

const Template: ComponentStory<typeof HeaderMenuLink> = (args) => (
  <HeaderMenuLink {...args} />
);

export const Example = Template.bind({});
Example.args = {
  name: 'link',
  detail: 'detail for link',
  href: '/',
  icon: TerminalIcon,
};
