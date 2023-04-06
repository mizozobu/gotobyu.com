import { CommandLineIcon } from '@heroicons/react/24/outline';
import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { HeaderMenuLink } from './HeaderMenuLink';

export default {
  title: 'components/molecules/HeaderMenuLink',
  component: HeaderMenuLink,
  argTypes: {},
} as Meta<typeof HeaderMenuLink>;

const Template: StoryFn<typeof HeaderMenuLink> = (args) => (
  <HeaderMenuLink {...args} />
);

export const Example = Template.bind({});
Example.args = {
  name: 'link',
  detail: 'detail for link',
  href: '/link',
  icon: CommandLineIcon,
};
