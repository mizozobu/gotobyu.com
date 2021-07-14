import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PageTitle, Props } from './PageTitle';

export default {
  title: 'atoms/PageTitle',
  component: PageTitle,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <PageTitle {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'example',
};
