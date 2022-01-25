/**
 * mdx content for test
 */
export const __MDX_CONTENT = `
import { readFile } from 'fs/promise';
import path from 'path';

export const variable1 = 'this should not be indexed.';
export const variable2 = () => 'this should not be indexed.';

<NoIndex>this should not be indexed.</NoIndex>


# heading 1-1

this is in heading 1-1. this is in heading 1-1.
this is in heading 1-1. this is in heading 1-1.


## heading 2-1

<Index>this is in heading 2-1.</Index> <Index>this is in heading 2-1.</Index>
<Index>this is in heading 2-1.</Index> <Index>this is in heading 2-1.</Index>
<NoIndex>this should not be indexed.</NoIndex>


### heading 3-1

this is in <Index>heading</Index> 3-1. this<Index> </Index>is in heading 3-1.
this is in heading <Index>3</Index>-1. this is in heading <Index>3-1</Index>.


### heading 3-2

this<NoIndex>this should not be indexed.</NoIndex> is in head<NoIndex>this should not be indexed.</NoIndex>ing 3-2. this is in heading 3-2.
<NoIndex>this should not be indexed.</NoIndex>this is in heading 3-2. this is in heading 3-2.<NoIndex>this should not be indexed.</NoIndex>


## heading 2-2

<Index>
  <Index>
    <Index>this is in heading 2-2.</Index>
  </Index>
</Index>
<Index>
  <Index>
    <Index>this is in heading 2-2.</Index>
  </Index>
</Index>
<Index>
  <Index>
    <Index>this is in heading 2-2.</Index>
  </Index>
</Index>
<Index>
  <Index>
    <Index>this is in heading 2-2.</Index>
  </Index>
</Index>

<NoIndex>
  <Index>this should not be indexed.</Index>
  <Index>
    <Index>this should not be indexed.</Index>
  </Index>
</NoIndex>


---


# **heading** *1-2*

[this is in heading 1-2.](https://example.com) **this** *is* in ***heading*** \`1-2\`.
[this is in heading 1-2.](https://example.com) **this** *is* in ***heading*** \`1-2\`.


## [heading](https://example.com) 2-3

> this is in heading 2-3. this is in heading 2-3.
> this is in heading 2-3. this is in heading 2-3.


## ***heading*** **2-4**

### heading 3-3

- this is in heading 3-3. this is in heading 3-3.
    this is in heading 3-3. this is in heading 3-3.


### heading 3-4

1. this is in heading 3-4. this is in heading 3-4.
    this is in heading 3-4. this is in heading 3-4.


### heading 3-5

    this is in heading 3-5. this is in heading 3-5.
    this is in heading 3-5. this is in heading 3-5.


### heading 3-6

![this is in heading 3-6.](https://example.com "this is in heading 3-6.") ![this is in heading 3-6.](https://example.com "this is in heading 3-6.")
![this is in heading 3-6.](https://example.com "this is in heading 3-6.") ![this is in heading 3-6.](https://example.com "this is in heading 3-6.")


### heading 3-7

<p>
  this is in heading 3-7. this is in heading 3-7.
  this is in heading 3-7. this is in heading 3-7.
</p>
`;

/**
 * __MDX_CONTENT as indexable objects
 */
export const __INDEXABLE_OBJECTS = [
  {
    permalink: '#heading 1-1',
    h1: 'heading 1-1',
    h2: '',
    h3: '',
    h4: '',
    h5: '',
    h6: '',
    content:
      'this is in heading 1-1. this is in heading 1-1.this is in heading 1-1. this is in heading 1-1.',
  },
  {
    permalink: '#heading 2-1',
    h1: 'heading 1-1',
    h2: 'heading 2-1',
    h3: '',
    h4: '',
    h5: '',
    h6: '',
    content:
      'this is in heading 2-1. this is in heading 2-1.this is in heading 2-1. this is in heading 2-1.',
  },
  {
    permalink: '#heading 3-1',
    h1: 'heading 1-1',
    h2: 'heading 2-1',
    h3: 'heading 3-1',
    h4: '',
    h5: '',
    h6: '',
    content:
      'this is in heading 3-1. this is in heading 3-1.this is in heading 3-1. this is in heading 3-1.',
  },
  {
    permalink: '#heading 3-2',
    h1: 'heading 1-1',
    h2: 'heading 2-1',
    h3: 'heading 3-2',
    h4: '',
    h5: '',
    h6: '',
    content:
      'this is in heading 3-2. this is in heading 3-2.this is in heading 3-2. this is in heading 3-2.',
  },
  {
    permalink: '#heading 2-2',
    h1: 'heading 1-1',
    h2: 'heading 2-2',
    h3: '',
    h4: '',
    h5: '',
    h6: '',
    content: 'this is in heading 2-2.',
  },
  {
    permalink: '#heading 2-2',
    h1: 'heading 1-1',
    h2: 'heading 2-2',
    h3: '',
    h4: '',
    h5: '',
    h6: '',
    content: 'this is in heading 2-2.',
  },
  {
    permalink: '#heading 2-2',
    h1: 'heading 1-1',
    h2: 'heading 2-2',
    h3: '',
    h4: '',
    h5: '',
    h6: '',
    content: 'this is in heading 2-2.',
  },
  {
    permalink: '#heading 2-2',
    h1: 'heading 1-1',
    h2: 'heading 2-2',
    h3: '',
    h4: '',
    h5: '',
    h6: '',
    content: 'this is in heading 2-2.',
  },
  {
    permalink: '#heading 1-2',
    h1: 'heading 1-2',
    h2: '',
    h3: '',
    h4: '',
    h5: '',
    h6: '',
    content:
      'this is in heading 1-2. this is in heading 1-2.this is in heading 1-2. this is in heading 1-2.',
  },
  {
    permalink: '#heading 2-3',
    h1: 'heading 1-2',
    h2: 'heading 2-3',
    h3: '',
    h4: '',
    h5: '',
    h6: '',
    content:
      'this is in heading 2-3. this is in heading 2-3.this is in heading 2-3. this is in heading 2-3.',
  },
  {
    permalink: '#heading 3-3',
    h1: 'heading 1-2',
    h2: 'heading 2-4',
    h3: 'heading 3-3',
    h4: '',
    h5: '',
    h6: '',
    content:
      'this is in heading 3-3. this is in heading 3-3.this is in heading 3-3. this is in heading 3-3.',
  },
  {
    permalink: '#heading 3-4',
    h1: 'heading 1-2',
    h2: 'heading 2-4',
    h3: 'heading 3-4',
    h4: '',
    h5: '',
    h6: '',
    content:
      'this is in heading 3-4. this is in heading 3-4.this is in heading 3-4. this is in heading 3-4.',
  },
  {
    permalink: '#heading 3-5',
    h1: 'heading 1-2',
    h2: 'heading 2-4',
    h3: 'heading 3-5',
    h4: '',
    h5: '',
    h6: '',
    content:
      'this is in heading 3-5. this is in heading 3-5.this is in heading 3-5. this is in heading 3-5.',
  },
  {
    permalink: '#heading 3-6',
    h1: 'heading 1-2',
    h2: 'heading 2-4',
    h3: 'heading 3-6',
    h4: '',
    h5: '',
    h6: '',
    content: '  ',
  },
  {
    permalink: '#heading 3-7',
    h1: 'heading 1-2',
    h2: 'heading 2-4',
    h3: 'heading 3-7',
    h4: '',
    h5: '',
    h6: '',
    content:
      'this is in heading 3-7. this is in heading 3-7.this is in heading 3-7. this is in heading 3-7.',
  },
];
