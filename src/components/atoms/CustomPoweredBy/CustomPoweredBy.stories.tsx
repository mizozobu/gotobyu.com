import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { MockInstantSearch } from '~/stories/mock/algolia';
import { CustomPoweredBy } from './CustomPoweredBy';

export default {
  title: 'atoms/CustomPoweredBy',
  component: CustomPoweredBy,
  argTypes: {},
} as ComponentMeta<typeof CustomPoweredBy>;

const Template: ComponentStory<typeof CustomPoweredBy> = () => (
  <MockInstantSearch>
    <CustomPoweredBy />
  </MockInstantSearch>
);

export const Example = Template.bind({});
Example.args = {};
