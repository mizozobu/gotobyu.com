import { useState, ComponentPropsWithoutRef } from 'react';
import { Type } from '@c/atoms/Type';

/**
 * Props for TypingEffect
 */
interface Props
  extends Omit<ComponentPropsWithoutRef<typeof Type>, 'children'> {
  /** Array of texts to type */
  children: string[];
}

/**
 * Type texts one after another
 */
export const TypingEffect = ({ children, ...props }: Props) => {
  const [current, setCurrent] = useState(0);

  const handleBack = () => {
    setCurrent(current < children.length - 1 ? current + 1 : 0);
  };

  return (
    <Type {...props} onBack={handleBack}>
      {children[current]}
    </Type>
  );
};
