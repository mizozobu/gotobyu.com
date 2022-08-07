import type { UrlObject } from 'url';
import NextLink from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';

/**
 * Props for {@link Link}
 */
interface Props extends Omit<ComponentPropsWithoutRef<'a'>, 'href'> {
  href: string | UrlObject;
}

/**
 * Client-side link
 */
export const Link = ({ href, children, ...props }: Props): JSX.Element => (
  <NextLink href={href}>
    <a {...props}>{children}</a>
  </NextLink>
);
