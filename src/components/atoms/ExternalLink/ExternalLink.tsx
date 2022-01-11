import { ExternalLinkIcon } from '@heroicons/react/solid';
import { FC, AnchorHTMLAttributes } from 'react';
import styles from './ExternalLink.module.css';

export interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const ExternalLink: FC<Props> = ({
  className = '',
  children,
  ...props
}: Props) => (
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
