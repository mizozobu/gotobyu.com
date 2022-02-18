import { LinkIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import {
  memo,
  ComponentPropsWithoutRef,
  MouseEventHandler,
  ComponentType,
  HTMLAttributes,
} from 'react';
import styles from './SectionTitle.module.css';

type HeadingComponent = ComponentType<HTMLAttributes<HTMLHeadingElement>>;

interface Props
  extends Omit<ComponentPropsWithoutRef<HeadingComponent>, 'onClick'> {
  as: HeadingComponent;
  id: string;
  active: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const SectionTitle = memo(
  ({
    as: Component,
    id,
    active = false,
    children,
    onClick,
    ...props
  }: Props) => (
    <Component {...props} id={id}>
      <Link href={`#${id}`}>
        <a tabIndex={-1}>
          <button
            type='button'
            className={classNames(
              {
                [styles.active]: active,
              },
              'font-bold',
            )}
            onClick={onClick}
          >
            {children}
            <LinkIcon className={classNames('ml-2', styles.icon)} />
          </button>
        </a>
      </Link>
    </Component>
  ),
);
