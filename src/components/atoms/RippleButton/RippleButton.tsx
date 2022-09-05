import classNames from 'classnames';
import type { ComponentPropsWithoutRef, CSSProperties } from 'react';
import type { SetIntersection } from 'utility-types';
import styles from './RippleButton.module.css';

/**
 * Props for {@link RippleButton}
 */
interface Props extends ComponentPropsWithoutRef<'button'> {
  /** Style to pass */
  style: Style<{
    /** Background color for the button */
    '--bg-color': SetIntersection<
      CSSProperties['backgroundColor'],
      CSSProperties['color']
    >;
    /** Ripple color for the button */
    '--ripple-color': SetIntersection<
      CSSProperties['backgroundColor'],
      CSSProperties['borderColor']
    >;
  }>;
}

/**
 * Drawing effect border
 */
export const RippleButton = ({ className, ...props }: Props): JSX.Element => (
  <button
    type='button'
    className={classNames(styles.ripple, className)}
    {...props}
  />
);
