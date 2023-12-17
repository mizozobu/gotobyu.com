import type { Route } from 'next';
import NextLink from 'next/link';
import type { ComponentPropsWithRef } from 'react';

/**
 * Props for {@link Link}
 */
interface Props<T extends string>
  extends ComponentPropsWithRef<typeof NextLink> {
  href: Route<T> | URL;
}

/**
 * Client-side link
 */
export const Link = <T extends string>(props: Props<T>): JSX.Element => (
  <NextLink {...props} />
);
