import { ExternalLinkIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './ExternalLink.module.css';

/**
 * Props for ExternalLink
 */
interface Props extends ComponentPropsWithoutRef<'a'> {}

/**
 * `<a>` for an external link
 */
export const ExternalLink = ({ className, children, ...props }: Props) => (
  <a
    {...props}
    target='_blank'
    rel='noreferrer'
    className={classNames(styles['external-link'], className)}
  >
    {children}
    <ExternalLinkIcon className={classNames(styles.icon, className)} />
  </a>
);
