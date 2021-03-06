import Link from 'next/link';
import {
  memo,
  type ComponentPropsWithoutRef,
  type MouseEventHandler,
  type ComponentType,
  type HTMLAttributes,
} from 'react';
import styles from './SectionTitle.module.css';

/**
 * Type for HTML Heading Component
 */
type HeadingComponent = ComponentType<HTMLAttributes<HTMLHeadingElement>>;

/**
 * Props for {@link SectionTitle}
 */
interface Props
  extends Omit<ComponentPropsWithoutRef<HeadingComponent>, 'onClick'> {
  /** Component to render the title as */
  as: HeadingComponent;
  /** Whether the element is targeted */
  active: boolean;
  /** Click event handler */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

/**
 * Title for a section with an anchor link
 */
export const SectionTitle = memo(
  ({
    as: Component,
    id = '',
    active = false,
    children,
    onClick,
    ...props
  }: Props): JSX.Element => (
    <Component
      {...props}
      id={id}
      className={styles['section-title']}
      aria-current={active}
    >
      <Link href={`#${id}`}>
        <a tabIndex={-1}>
          <button type='button' className='text-left' onClick={onClick}>
            <span className={styles['section-title-text']}>{children}</span>
          </button>
        </a>
      </Link>
    </Component>
  ),
);
