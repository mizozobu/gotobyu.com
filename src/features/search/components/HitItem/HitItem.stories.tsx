import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { MockInstantSearch } from '@/test/instantsearch';
import { HitItem } from './HitItem';

export default {
  title: 'features/search/HitItem',
  component: HitItem,
  argTypes: {},
} as ComponentMeta<typeof HitItem>;

// eslint-disable-next-line react/prop-types
const Template: ComponentStory<typeof HitItem> = ({ hit, ...args }) => (
  <MockInstantSearch>
    <HitItem {...args} hit={{ ...hit, permalink: window.location.href }} />
  </MockInstantSearch>
);

export const Example = Template.bind({});
Example.args = {
  hit: {
    objectID: 'objectID1',
    permalink: 'https://example.com/obj2',
    h1: 'heading 1',
    h2: 'heading 2',
    h3: 'heading 3',
    h4: 'heading 4',
    h5: 'heading 5',
    h6: 'heading 6',
    content: 'This should be highlighted.',
    _tags: ['https://example.com'],
    _highlightResult: {
      h1: {
        value: 'heading 1',
        matchLevel: 'none',
        matchedWords: [],
      },
      h2: {
        value: 'heading 2',
        matchLevel: 'none',
        matchedWords: [],
      },
      h3: {
        value: 'heading 3',
        matchLevel: 'none',
        matchedWords: [],
      },
      h4: {
        value: 'heading 4',
        matchLevel: 'none',
        matchedWords: [],
      },
      h5: {
        value: 'heading 5',
        matchLevel: 'none',
        matchedWords: [],
      },
      h6: {
        fullyHighlighted: true,
        matchLevel: 'full',
        matchedWords: ['heading'],
        value: '<ais-highlight-0000000000>heading</ais-highlight-0000000000> 6',
      },
      content: {
        fullyHighlighted: false,
        matchLevel: 'full',
        matchedWords: ['highlighted'],
        value:
          'This should be <ais-highlight-0000000000>highlighted</ais-highlight-0000000000>.',
      },
    },
    _snippetResult: {
      content: {
        matchLevel: 'full',
        value:
          'This should be <ais-highlight-0000000000>highlighted</ais-highlight-0000000000>.',
      },
    },
  },
};
