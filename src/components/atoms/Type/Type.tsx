import classNames from 'classnames';
import { useState, useEffect, ComponentPropsWithoutRef } from 'react';
import { Style } from '@c/atoms/Style';
import styles from './Type.module.css';

/**
 * Props for {@link Type}
 */
interface Props extends ComponentPropsWithoutRef<'span'> {
  /** Text to effect */
  children: string;
  /** Caret width */
  caretWidth?: string;
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
const Status = {
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
  caretWidth = '2px',
  typeSpeed = 75,
  waitBeforeType = 3000,
  waitAfterType = 1000,
  onBack,
  ...props
}: Props): JSX.Element => {
  const [typed, setTyped] = useState('');
  const [status, setStatus] = useState(Status.forward);

  useEffect(() => {
    const interval = setInterval(() => {
      if (status === Status.forward) {
        const next = text.substring(0, typed.length + 1);
        if (typed === next) {
          setStatus(Status.waiting);
          setTimeout(() => {
            setStatus(Status.backward);
          }, waitAfterType);
        }

        setTyped(next);
      } else if (status === Status.backward) {
        const prev = text.substring(0, typed.length - 1);
        if (typed === prev) {
          setStatus(Status.waiting);
          setTimeout(() => {
            onBack?.();
            setStatus(Status.forward);
          }, waitBeforeType);
        }

        setTyped(text.substring(0, typed.length - 1));
      }
    }, typeSpeed);
    return () => clearInterval(interval);
  }, [text, typed, status, typeSpeed, waitAfterType, waitBeforeType, onBack]);

  return (
    <>
      <span {...props}>
        {typed.substring(0, typed.length - 1)}
        <span
          className={classNames(
            styles.type,
            status === Status.waiting ? styles.stopped : styles.typing,
          )}
        >
          {typed[typed.length - 1]}
        </span>
      </span>
      <Style
        selector={`.${styles.type}`}
        styles={{
          '--caret-width': caretWidth,
        }}
      />
    </>
  );
};
