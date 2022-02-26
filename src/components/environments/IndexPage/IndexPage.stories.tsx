import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { IndexPage } from './IndexPage';

export default {
  title: 'pages/IndexPage',
  component: IndexPage,
  argTypes: {},
} as ComponentMeta<typeof IndexPage>;

const Template: ComponentStory<typeof IndexPage> = () => <IndexPage />;

export const Example = Template.bind({});
Example.args = {};
