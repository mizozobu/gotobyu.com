import { useState, type ComponentPropsWithoutRef } from 'react';
import { Type } from '@c/atoms/Type';

/**
 * Props for {@link TypingEffect}
 */
interface Props
  extends Omit<ComponentPropsWithoutRef<typeof Type>, 'children'> {
  /** Array of texts to type */
  children: string[];
}

/**
 * Type texts one after another
 */
export const TypingEffect = ({ children, ...props }: Props): JSX.Element => {
  const [current, setCurrent] = useState(0);

  /**
   * Fired after erasing all characters after complete typing
   */
  const handleBack = (): void => {
    setCurrent(current < children.length - 1 ? current + 1 : 0);
  };

  return (
    <Type {...props} onBack={handleBack}>
      {children[current]}
    </Type>
  );
};
