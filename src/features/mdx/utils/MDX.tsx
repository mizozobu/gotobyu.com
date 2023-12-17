import type { MDXComponents } from 'mdx/types';
import type { Route } from 'next';
import dynamic from 'next/dynamic';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { Required } from 'utility-types';
import { ExternalLink } from '@/components/atoms/ExternalLink';
import { InternalLink } from '@/components/atoms/InternalLink';
import { Li } from '@/components/atoms/Li';
import { P } from '@/components/atoms/P';
import { Strong } from '@/components/atoms/Strong';
import { Ul } from '@/components/atoms/Ul';
import { H1, H2, H3 } from '../components/Heading';
import { MdxContainer } from '../components/MdxContainer';

/**
 * Dynamically imported CopiedDialog with no SSR
 */
const CopiedDialog = dynamic(
  () =>
    import('@/features/anchor').then(
      ({ CopiedDialog: Component }) => Component,
    ),
  { ssr: false },
);

/**
 * MDX component registry
 */
const _MDX = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  a: ({ href = '', ...props }: ComponentPropsWithoutRef<'a'>) => {
    // see https://github.com/sindresorhus/is-absolute-url/blob/main/index.js#L3
    const Component = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/.test(href)
      ? ExternalLink
      : InternalLink;
    return <Component href={href as Route} {...props} />;
  },
  strong: Strong,
  ul: Ul,
  li: Li,
  wrapper: ({ children }: { children: ReactNode }) => (
    <>
      <MdxContainer>{children}</MdxContainer>
      <CopiedDialog />
    </>
  ),
};

/**
 * Typed _MDX
 */
export const MDX: Required<MDXComponents, keyof typeof _MDX> = _MDX;
