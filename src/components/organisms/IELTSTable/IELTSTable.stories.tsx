import React from 'react';
import { Story, Meta } from '@storybook/react';
import { IELTSTable, Props, data } from './IELTSTable';

export default {
  title: 'molecules/IELTSTable',
  component: IELTSTable,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => <IELTSTable {...args} />;

export const Example = Template.bind({});
Example.args = {
  data,
};
