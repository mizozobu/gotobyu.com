import type { Algoliast } from '../types';
import { classifyHits } from './classifyHits';

describe('classifyHits', () => {
  it('should classify hits by h1', () => {
    expect.assertions(1);

    const obj1: Algoliast = {
      permalink: 'https://example.com/obj1',
      h1: 'heading a',
      h2: '',
      h3: '',
      h4: '',
      h5: '',
      h6: '',
      content: 'obj1',
      _tags: ['https://example.com'],
    };
    const obj2: Algoliast = {
      permalink: 'https://example.com/obj2',
      h1: 'heading b',
      h2: '',
      h3: '',
      h4: '',
      h5: '',
      h6: '',
      content: 'obj2',
      _tags: ['https://example.com'],
    };
    const obj3: Algoliast = {
      permalink: 'https://example.com/obj3',
      h1: 'heading a',
      h2: '',
      h3: '',
      h4: '',
      h5: '',
      h6: '',
      content: 'obj3',
      _tags: ['https://example.com'],
    };

    expect(classifyHits([obj1, obj2, obj3])).toStrictEqual([
      {
        h1: 'heading a',
        hits: [obj1, obj3],
      },
      {
        h1: 'heading b',
        hits: [obj2],
      },
    ]);
  });
});
