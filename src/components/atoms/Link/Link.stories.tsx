import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { Link } from './Link';

export default {
  title: 'components/atoms/Link',
  component: Link,
  argTypes: {},
} as Meta<typeof Link>;

const Template: StoryFn<typeof Link> = (args) => <Link {...args} />;

export const Example = Template.bind({});
Example.args = {
  href: '/',
  children: 'Link',
};
