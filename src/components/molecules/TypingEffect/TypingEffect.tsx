import { useState, ComponentPropsWithoutRef } from 'react';
import { Type } from '@cmp/atoms/Type';

interface Props
  extends Omit<ComponentPropsWithoutRef<typeof Type>, 'children'> {
  children: string[];
}

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
