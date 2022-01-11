import { useState } from 'react';
import { Type, Props as TypeProps } from '@cmp/atoms/Type';

export interface Props extends Omit<TypeProps, 'children'> {
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
