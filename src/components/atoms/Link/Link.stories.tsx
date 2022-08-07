import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Link } from './Link';

export default {
  title: 'atoms/Link',
  component: Link,
  argTypes: {},
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Example = Template.bind({});
Example.args = {
  href: '/',
  children: 'Link',
};
