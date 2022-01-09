import { FC, AnchorHTMLAttributes } from 'react';
import type { Required } from 'utility-types';
import { H1 } from '@cmp/atoms/H1';
import { SectionTitle } from '@cnt/SectionTitle';
import { H3 } from '@cmp/atoms/H3';
import { P } from '@cmp/atoms/P';
import { ExternalLink } from '@cmp/atoms/ExternalLink';
import { InternalLink } from '@cmp/atoms/InternalLink';
import { Strong } from '@cmp/atoms/Strong';
import { Ul } from '@cmp/atoms/Ul';
import { Li } from '@cmp/atoms/Li';
import { Container } from '@cmp/atoms/Container';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MDX: { [key: string]: FC<any> } = {
  h1: H1,
  h2: SectionTitle,
  h3: H3,
  p: P,
  a: ({
    href,
    ...props
  }: Required<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>) => {
    // see https://github.com/sindresorhus/is-absolute-url/blob/main/index.js#L3
    const Component = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/.test(href)
      ? ExternalLink
      : InternalLink;
    return <Component href={href} {...props} />;
  },
  strong: Strong,
  ul: Ul,
  li: Li,
  wrapper: ({ children }) => <Container>{children}</Container>,
};
