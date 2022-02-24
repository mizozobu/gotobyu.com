import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { Required } from 'utility-types';
import { ExternalLink } from '@cmp/atoms/ExternalLink';
import { InternalLink } from '@cmp/atoms/InternalLink';
import { Li } from '@cmp/atoms/Li';
import { P } from '@cmp/atoms/P';
import { Strong } from '@cmp/atoms/Strong';
import { Ul } from '@cmp/atoms/Ul';
import { MdxContainer } from '@cmp/templates/MdxContainer';
import { H1, H2, H3 } from '@cnt/Heading';
import type { MDXProvider } from './mdx.interface';

/**
 * mdx component registry
 */
export const MDX: MDXProvider = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  a: ({ href, ...props }: Required<ComponentPropsWithoutRef<'a'>, 'href'>) => {
    // see https://github.com/sindresorhus/is-absolute-url/blob/main/index.js#L3
    const Component = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/.test(href)
      ? ExternalLink
      : InternalLink;
    return <Component href={href} {...props} />;
  },
  strong: Strong,
  ul: Ul,
  li: Li,
  wrapper: ({ children }: { children: ReactNode }) => (
    <MdxContainer>{children}</MdxContainer>
  ),
};
