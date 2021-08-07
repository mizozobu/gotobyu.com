import { FC, AnchorHTMLAttributes } from 'react';
import Link from 'next/link';

export interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const InternalLink: FC<Props> = ({
  href,
  className = '',
  children,
  ...props
}: Props) => (
  <Link href={href}>
    <a
      {...props}
      className={classNames('text-indigo-500 font-medium', className)}
    >
      {children}
    </a>
  </Link>
);
