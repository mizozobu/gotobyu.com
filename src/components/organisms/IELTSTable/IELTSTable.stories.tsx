import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { IELTSTable } from './IELTSTable';

export default {
  title: 'molecules/IELTSTable',
  component: IELTSTable,
  argTypes: {},
} as ComponentMeta<typeof IELTSTable>;

const Template: ComponentStory<typeof IELTSTable> = () => <IELTSTable />;

export const Example = Template.bind({});
Example.args = {};
