import type { ComponentType } from 'react';

/**
 * type for MDXProvider key
 * see https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mdx-js__react/index.d.ts
 */
export type MDXProviderKey =
  | 'wrapper'
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  // | 'h4'
  // | 'h5'
  // | 'h6'
  // | 'thematicBreak'
  // | 'Blockquote'
  | 'ul'
  // | 'ol'
  | 'li'
  // | 'table'
  // | 'tr'
  // | 'th'
  // | 'td'
  // | 'pre'
  // | 'code'
  // | 'em'
  | 'strong'
  // | 'delete'
  // | 'inlineCode'
  // | 'hr'
  | 'a';
// | 'img';

/**
 * type for MDXProvider
 */
export type MDXProvider = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key in MDXProviderKey]: ComponentType<any>;
};
