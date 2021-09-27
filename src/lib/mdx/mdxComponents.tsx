import { FC, AnchorHTMLAttributes } from 'react';
import SectionTitle from '@c/atoms/SectionTitle';
import { ExternalLink } from '@c/atoms/ExternalLink';
import { InternalLink } from '@c/atoms/InternalLink';
import { Mark } from '@c/atoms/Mark';
import { Container } from '@c/atoms/Container';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mdxComponents: { [key: string]: FC<any> } = {
  h2: SectionTitle,
  a: ({ href = '', ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    // see https://github.com/sindresorhus/is-absolute-url/blob/main/index.js#L3
    const Component = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/.test(href)
      ? ExternalLink
      : InternalLink;
    return <Component href={href} {...props} />;
  },
  strong: Mark,
  wrapper: ({ children }) => <Container>{children}</Container>,
};
