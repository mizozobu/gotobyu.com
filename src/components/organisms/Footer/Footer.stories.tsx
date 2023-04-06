import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import { Footer } from './Footer';

export default {
  title: 'components/organisms/Footer',
  component: Footer,
  argTypes: {},
} as Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = () => <Footer />;

export const Example = Template.bind({});
Example.args = {};
