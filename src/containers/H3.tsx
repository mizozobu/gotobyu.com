import type { ComponentPropsWithoutRef } from 'react';
import { H3 as _H3 } from '@cmp/atoms/H3';
import { SectionTitle } from '@cnt/SectionTitle';

interface Props
  extends Omit<ComponentPropsWithoutRef<typeof SectionTitle>, 'as'> {}

export const H3 = ({ ...props }: Props) => <SectionTitle as={_H3} {...props} />;
