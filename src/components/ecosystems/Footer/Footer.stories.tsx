import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Footer } from './Footer';

export default {
  title: 'organisms/Footer',
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Example = Template.bind({});
Example.args = {};
