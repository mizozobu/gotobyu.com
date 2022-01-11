import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import styles from './InternalLink.module.css';

export interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const InternalLink = ({
  href,
  className = '',
  children,
  ...props
}: Props) => (
  <Link href={href}>
    <a {...props} className={classNames(styles['internal-link'], className)}>
      {children}
    </a>
  </Link>
);
