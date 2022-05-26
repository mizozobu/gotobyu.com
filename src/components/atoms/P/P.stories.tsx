import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { P } from './P';

export default {
  title: 'atoms/P',
  component: P,
  argTypes: {},
} as ComponentMeta<typeof P>;

const Template: ComponentStory<typeof P> = (args) => <P {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'Paragraph',
};
