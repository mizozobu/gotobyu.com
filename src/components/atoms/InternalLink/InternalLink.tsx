import classNames from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';
import { Link } from '@c/atoms/Link';
import styles from './InternalLink.module.css';

/**
 * Props for {@link InternalLink}
 */
interface Props extends ComponentPropsWithoutRef<'a'> {
  /** href to pass */
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
  <Link
    href={href}
    className={classNames(styles['internal-link'], className)}
    {...props}
  >
    {children}
  </Link>
);
