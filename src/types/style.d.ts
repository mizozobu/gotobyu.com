import type { CSSProperties } from 'react';

declare global {
  type Style<T> = CSSProperties & T;
}
