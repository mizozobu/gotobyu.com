import { FC } from 'react';
import { PageTitle } from '@c/atoms/PageTitle';
import SectionTitle from '@c/atoms/SectionTitle';
import { ExternalLink } from '@c/atoms/ExternalLink';
import { Mark } from '@c/atoms/Mark';
import { Container } from '@c/atoms/Container';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mdxComponents: { [key: string]: FC<any> } = {
  h1: PageTitle,
  h2: SectionTitle,
  a: ExternalLink,
  strong: Mark,
  wrapper: ({ children }) => <Container>{children}</Container>,
};
