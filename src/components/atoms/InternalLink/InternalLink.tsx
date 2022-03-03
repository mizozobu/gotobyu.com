import classNames from 'classnames';
import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './InternalLink.module.css';

interface Props extends ComponentPropsWithoutRef<'a'> {
  href: string;
}

export const InternalLink = ({
  href,
  className,
  children,
  ...props
}: Props) => (
  <Link href={href}>
    <a {...props} className={classNames(styles['internal-link'], className)}>
      {children}
    </a>
  </Link>
);
