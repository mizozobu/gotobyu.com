import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { MDX } from '@/features/mdx';
import Byuh from './byuh.mdx';

export default {
  title: 'features/byuh/Byuh',
  component: Byuh,
  argTypes: {},
} as ComponentMeta<typeof Byuh>;

const Template: ComponentStory<typeof Byuh> = () => <Byuh components={MDX} />;

export const Example = Template.bind({});
Example.args = {};
