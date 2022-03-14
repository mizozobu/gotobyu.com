import classNames from 'classnames';
import { CSSProperties, ReactNode } from 'react';
import styles from './RippleButton.module.css';

/**
 * Props for {@link RippleButton}
 */
interface Props {
  /** className to pass */
  className?: string;
  /** Background color */
  backgroundColor: string;
  /** Ripple color */
  rippleColor: string;
  /** Component to add a border to  */
  children: ReactNode;
}

/**
 * Drawing effect border
 */
export const RippleButton = ({
  className,
  backgroundColor,
  rippleColor,
  children,
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
  >
    {children}
  </button>
);
