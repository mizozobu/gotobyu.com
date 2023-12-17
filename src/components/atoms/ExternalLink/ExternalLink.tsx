import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import type { Route } from 'next';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './ExternalLink.module.css';

/**
 * Props for {@link ExternalLink}
 */
interface Props extends ComponentPropsWithoutRef<'a'> {
  href: Route;
}

/**
 * `<a>` for an external link
 */
export const ExternalLink = ({
  className,
  children,
  ...props
}: Props): JSX.Element => (
  <a
    {...props}
    target='_blank'
    rel='noreferrer'
    className={classNames(styles['external-link'], className)}
  >
    {children}
    <ArrowTopRightOnSquareIcon className={classNames(styles.icon, className)} />
  </a>
);
