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
  active: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const SectionTitle = memo(
  ({
    as: Component,
    id = '',
    active = false,
    children,
    onClick,
    ...props
  }: Props) => (
    <Component {...props} id={id}>
      <Link href={`#${id}`}>
        <a tabIndex={-1}>
          <button type='button' className='text-left' onClick={onClick}>
            <span
              className={classNames(styles['section-title'], {
                [styles.highlighted]: active,
              })}
            >
              {children}
            </span>
          </button>
        </a>
      </Link>
    </Component>
  ),
);
