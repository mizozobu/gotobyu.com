'use client';

import classNames from 'classnames';
import {
  useState,
  useEffect,
  useCallback,
  memo,
  type ComponentPropsWithoutRef,
  type ComponentType,
  type HTMLAttributes,
} from 'react';
import { Link } from '@/components/atoms/Link';
import { useCopiedDialog } from '../../hooks/useCopiedDialog';
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
}

/**
 * Title for a section with an anchor link
 */
export const SectionTitle = memo(
  ({
    as: Component,
    id: _id = '',
    className,
    children,
    ...props
  }: Props): JSX.Element => {
    const id = encodeURIComponent(_id);
    const { openCopiedDialog } = useCopiedDialog();
    const [active, setActive] = useState(false);

    const handleClick = useCallback(() => {
      if (navigator.clipboard && window.isSecureContext) {
        const { origin, pathname } = window.location;
        void navigator.clipboard.writeText(`${origin}${pathname}#${id}`);

        openCopiedDialog();
      }
    }, [id, openCopiedDialog]);

    useEffect(() => {
      setActive(decodeURIComponent(window.location.hash).substring(1) === id);
    }, [id, setActive]);

    return (
      <Component
        {...props}
        id={id}
        className={classNames(className, styles['section-title'])}
        aria-current={active}
      >
        <Link href={`#${id}`} scroll={false} tabIndex={-1}>
          <button type='button' className='text-left' onClick={handleClick}>
            <span className={styles['section-title-text']}>{children}</span>
          </button>
        </Link>
      </Component>
    );
  },
);
