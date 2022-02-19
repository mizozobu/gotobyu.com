import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Style } from './Style';

export default {
  title: 'atoms/Style',
  component: Style,
  argTypes: {},
} as ComponentMeta<typeof Style>;

const Template: ComponentStory<typeof Style> = (args) => <Style {...args} />;

export const Example = Template.bind({});
Example.args = {
  selector: ':root',
  styles: {
    'background-color': 'red',
  },
};
