import type { ComponentPropsWithoutRef } from 'react';
import { H1 as _H1 } from '@cmp/atoms/H1';
import { SectionTitle } from '@cnt/SectionTitle';

interface Props
  extends Omit<ComponentPropsWithoutRef<typeof SectionTitle>, 'as'> {}

export const H1 = ({ ...props }: Props) => <SectionTitle as={_H1} {...props} />;
