'use client';

import classNames from 'classnames';
import {
  useState,
  useEffect,
  type ComponentPropsWithoutRef,
  type CSSProperties,
} from 'react';
import type { SetIntersection } from 'utility-types';
import styles from './Type.module.css';

/**
 * Props for {@link Type}
 */
interface Props extends ComponentPropsWithoutRef<'span'> {
  /** Text to effect */
  children: string;
  /** Style to pass */
  style?: Style<{
    /** Caret width */
    '--caret-width'?: SetIntersection<
      CSSProperties['width'],
      CSSProperties['paddingRight']
    >;
  }>;
  /** Time in seconds between types */
  typeSpeed?: number;
  /** Time in seconds to wait before start typing the text */
  waitAfterType?: number;
  /** Time in seconds to wait after complete typing the text */
  waitBeforeType?: number;
  /** Called when all characters are erased  */
  onBack?: () => void;
}

/**
 * Typing status
 */
const STATUS = {
  /** Typing a text */
  forward: Symbol('forward'),
  /** Erasing a text */
  backward: Symbol('backward'),
  /** Waiting(doing nothing) */
  waiting: Symbol('waiting'),
};

/**
 * Text with typing effect
 */
export const Type = ({
  children: text,
  typeSpeed = 75,
  waitBeforeType = 3000,
  waitAfterType = 1000,
  onBack,
  ...props
}: Props): JSX.Element => {
  const [typed, setTyped] = useState('');
  const [status, setStatus] = useState(STATUS.forward);

  useEffect(() => {
    let interval: number;

    if (status === STATUS.forward) {
      interval = window.setInterval(() => {
        const next = text.substring(0, typed.length + 1);
        if (typed === next) {
          setStatus(STATUS.waiting);
          window.setTimeout(() => {
            setStatus(STATUS.backward);
          }, waitAfterType - typeSpeed);
        }
        setTyped(next);
      }, typeSpeed);
    } else if (status === STATUS.backward) {
      interval = window.setInterval(() => {
        const prev = text.substring(0, typed.length - 1);
        if (typed === prev) {
          setStatus(STATUS.waiting);
          window.setTimeout(() => {
            onBack?.();
            setStatus(STATUS.forward);
          }, waitBeforeType - typeSpeed);
        }
        setTyped(prev);
      }, typeSpeed);
    }

    return () => {
      window.clearInterval(interval);
    };
  }, [text, typed, status, typeSpeed, waitAfterType, waitBeforeType, onBack]);

  return (
    <>
      <span className='sr-only'>{text}</span>
      <span aria-hidden='true' data-testid='Type' {...props}>
        {typed}
        <span
          className={classNames(
            styles.type,
            status === STATUS.waiting ? styles.stopped : styles.typing,
          )}
        />
      </span>
    </>
  );
};
