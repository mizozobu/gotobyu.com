import { ExternalLinkIcon } from '@heroicons/react/solid';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './ExternalLink.module.css';

export interface Props extends ComponentPropsWithoutRef<'a'> {}

export const ExternalLink = ({ className = '', children, ...props }: Props) => (
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
