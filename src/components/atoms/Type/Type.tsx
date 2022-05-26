import classNames from 'classnames';
import {
  useState,
  useEffect,
  type ComponentPropsWithoutRef,
  type CSSProperties,
} from 'react';
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
  const [status, setStatus] = useState(Status.waiting);

  /**
   * start typing on load
   */
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTyped(text[0]);
      setStatus(Status.forward);
    }, typeSpeed);
    return () => clearTimeout(timeout);
  }, [text, typeSpeed]);

  /**
   * change interval function when status changes
   */
  useEffect(() => {
    if (status === Status.forward) {
      const interval = setInterval(() => {
        setTyped((prevTyped) => text.substring(0, prevTyped.length + 1));
      }, typeSpeed);
      return () => clearInterval(interval);
    }
    if (status === Status.backward) {
      const interval = setInterval(() => {
        setTyped((prevTyped) => text.substring(0, prevTyped.length - 1));
      }, typeSpeed);
      return () => clearInterval(interval);
    }
    return undefined;
  }, [status, text, typeSpeed]);

  /**
   * change status when typed changes
   */
  useEffect(() => {
    if (typed === text) {
      setStatus(Status.waiting);
      const timeout = setTimeout(() => {
        setStatus(Status.backward);
      }, waitAfterType);
      return () => clearTimeout(timeout);
    }
    if (typed === '') {
      setStatus(Status.waiting);
      const timeout = setTimeout(() => {
        setStatus(Status.forward);
        onBack?.();
      }, waitBeforeType);
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [typed, text, onBack, waitAfterType, waitBeforeType]);

  return (
    <>
      <span className='sr-only'>{text}</span>
      <span
        {...props}
        style={
          {
            '--caret-width': caretWidth,
          } as CSSProperties
        }
        aria-hidden='true'
        data-testid='Type'
      >
        {typed}
        <span
          className={classNames(
            styles.type,
            status === Status.waiting ? styles.stopped : styles.typing,
          )}
        />
      </span>
    </>
  );
};
