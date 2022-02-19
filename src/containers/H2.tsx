import type { ComponentPropsWithoutRef } from 'react';
import { H2 as _H2 } from '@cmp/atoms/H2';
import { SectionTitle } from '@cnt/SectionTitle';

interface Props
  extends Omit<ComponentPropsWithoutRef<typeof SectionTitle>, 'as'> {}

export const H2 = ({ ...props }: Props) => <SectionTitle as={_H2} {...props} />;
