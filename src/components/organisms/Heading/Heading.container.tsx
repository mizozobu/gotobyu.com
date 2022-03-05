import type { ComponentPropsWithoutRef } from 'react';
import { H1 as _H1 } from '@c/atoms/H1';
import { H2 as _H2 } from '@c/atoms/H2';
import { H3 as _H3 } from '@c/atoms/H3';
import { SectionTitle } from '@c/organisms/SectionTitle';

/**
 * Props for H1, H2, and H3 container
 */
interface Props
  extends Omit<ComponentPropsWithoutRef<typeof SectionTitle>, 'as'> {}

/**
 * Container compoenent for H1
 */
export const H1 = ({ ...props }: Props) => <SectionTitle as={_H1} {...props} />;

/**
 * Container compoenent for H2
 */
export const H2 = ({ ...props }: Props) => <SectionTitle as={_H2} {...props} />;

/**
 * Container compoenent for H3
 */
export const H3 = ({ ...props }: Props) => <SectionTitle as={_H3} {...props} />;
