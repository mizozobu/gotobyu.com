import { useState, useEffect, ComponentPropsWithoutRef } from 'react';
import styles from './Type.module.css';

interface Props extends ComponentPropsWithoutRef<'span'> {
  children: string;
  caretWidth?: string;
  typeSpeed?: number;
  waitAfterType?: number;
  waitBeforeType?: number;
  onBack?: () => void;
}

const Status = {
  forward: Symbol('forward'),
  backward: Symbol('backward'),
  waiting: Symbol('waiting'),
};

export const Type = ({
  children: text,
  caretWidth = '2px',
  typeSpeed = 75,
  waitBeforeType = 3000,
  waitAfterType = 1000,
  onBack,
  ...props
}: Props) => {
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
            if (onBack) onBack();
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
      <style jsx>{`
        .${styles.type} {
          --caret-width: ${caretWidth};
        }
      `}</style>
    </>
  );
};
