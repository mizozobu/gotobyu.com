import type { TopLevelContent, Heading } from 'mdast';
import type {
  MDXFlowExpression,
  MDXTextExpression,
  MDXJsxFlowElement,
  MDXJsxTextElement,
  MDXJSEsm,
} from 'mdast-util-mdx';

/**
 * type for heading depth
 */
export type HeadingDepth = Heading['depth'];

/**
 * type for indexable object in algolia
 */
export interface IndexableObject {
  permalink: string;
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  content: string;
}

/**
 * type for mdast tree with mdx
 */
export type MDXTopLevelContent =
  | TopLevelContent
  | MDXFlowExpression
  | MDXTextExpression
  | MDXJsxFlowElement
  | MDXJsxTextElement
  | MDXJSEsm;
