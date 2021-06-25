import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SectionTitle, Props } from './SectionTitle';

export default {
  title: 'atoms/SectionTitle',
  component: SectionTitle,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <SectionTitle {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'example',
};
