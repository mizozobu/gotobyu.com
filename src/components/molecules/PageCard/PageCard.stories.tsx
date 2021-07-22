import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ScaleIcon } from '@heroicons/react/outline';
import { PageCard, Props } from './PageCard';

export default {
  title: 'molecules/PageCard',
  component: PageCard,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <PageCard {...args} />;

export const Example = Template.bind({});
Example.args = {
  icon: ScaleIcon,
  name: 'What is Lorem Ipsum?',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
};
