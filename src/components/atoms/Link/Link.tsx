import type { Route } from 'next';
import NextLink from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';

/**
 * Props for {@link Link}
 */
interface Props<T extends string>
  extends Omit<ComponentPropsWithoutRef<'a'>, 'href'> {
  href: Route<T> | URL;
}

/**
 * Client-side link
 */
export const Link = <T extends string>(props: Props<T>): JSX.Element => (
  <NextLink {...props} />
);
