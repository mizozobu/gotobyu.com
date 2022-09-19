import classNames from 'classnames';
import {
  memo,
  type ComponentPropsWithoutRef,
  type ComponentType,
  type HTMLAttributes,
} from 'react';
import { Link } from '@/components/atoms/Link';
import { useAnchorLink } from '../../hooks/useAnchorLink';
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
    const { active, handleClick } = useAnchorLink(_id);
    const id = encodeURIComponent(_id);

    return (
      <Component
        {...props}
        id={id}
        className={classNames(className, styles['section-title'])}
        aria-current={active}
      >
        <Link href={`#${id}`} tabIndex={-1}>
          <button type='button' className='text-left' onClick={handleClick}>
            <span className={styles['section-title-text']}>{children}</span>
          </button>
        </Link>
      </Component>
    );
  },
);
