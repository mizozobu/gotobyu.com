import type { MDXComponents } from 'mdx/types';
import dynamic from 'next/dynamic';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { Required } from 'utility-types';
import { ExternalLink } from '@c/atoms/ExternalLink';
import { InternalLink } from '@c/atoms/InternalLink';
import { Li } from '@c/atoms/Li';
import { MdxContainer } from '@c/atoms/MdxContainer';
import { P } from '@c/atoms/P';
import { Strong } from '@c/atoms/Strong';
import { Ul } from '@c/atoms/Ul';
import type { Props as CopiedDialogProps } from '@c/ecosystems/shared/CopiedDialog';
import { H1, H2, H3 } from '@c/organisms/Heading';

/**
 * Dynamically imported CopiedDialog with no SSR
 */
const CopiedDialog = dynamic<CopiedDialogProps>(
  () =>
    import('@c/ecosystems/shared/CopiedDialog').then(
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
    return <Component href={href} {...props} />;
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
