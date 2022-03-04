import type { ComponentPropsWithoutRef } from 'react';
import { H1 as _H1 } from '@cmp/atoms/H1';
import { H2 as _H2 } from '@cmp/atoms/H2';
import { H3 as _H3 } from '@cmp/atoms/H3';
import { SectionTitle } from '@cmp/ecosystems/shared/SectionTitle';

interface Props
  extends Omit<ComponentPropsWithoutRef<typeof SectionTitle>, 'as'> {}

export const H1 = ({ ...props }: Props) => <SectionTitle as={_H1} {...props} />;
export const H2 = ({ ...props }: Props) => <SectionTitle as={_H2} {...props} />;
export const H3 = ({ ...props }: Props) => <SectionTitle as={_H3} {...props} />;
