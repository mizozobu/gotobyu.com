import classNames from 'classnames';
import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './InternalLink.module.css';

/**
 * Props for {@link InternalLink}
 */
interface Props extends ComponentPropsWithoutRef<'a'> {
  href: string;
}

/**
 * `<a>` for an internal link
 */
export const InternalLink = ({
  href,
  className,
  children,
  ...props
}: Props): JSX.Element => (
  <Link href={href}>
    <a {...props} className={classNames(styles['internal-link'], className)}>
      {children}
    </a>
  </Link>
);
