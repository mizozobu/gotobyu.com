import { ScaleIcon } from '@heroicons/react/24/outline';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { PageCard } from './PageCard';

export default {
  title: 'components/molecules/PageCard',
  component: PageCard,
  argTypes: {},
} as ComponentMeta<typeof PageCard>;

const Template: ComponentStory<typeof PageCard> = (args) => (
  <PageCard {...args} />
);

export const Example = Template.bind({});
Example.args = {
  icon: ScaleIcon,
  name: 'What is Lorem Ipsum?',
  detail:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
};
