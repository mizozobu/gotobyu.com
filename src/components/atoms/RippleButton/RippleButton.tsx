import classNames from 'classnames';
import type { ComponentPropsWithoutRef, CSSProperties } from 'react';
import styles from './RippleButton.module.css';

/**
 * Props for {@link RippleButton}
 */
interface Props extends ComponentPropsWithoutRef<'button'> {
  /** Background color */
  backgroundColor: string;
  /** Ripple color */
  rippleColor: string;
}

/**
 * Drawing effect border
 */
export const RippleButton = ({
  className,
  backgroundColor,
  rippleColor,
  ...props
}: Props): JSX.Element => (
  <button
    type='button'
    className={classNames(styles.ripple, className)}
    style={
      {
        '--background-color': backgroundColor,
        '--ripple-color': rippleColor,
      } as CSSProperties
    }
    {...props}
  />
);
