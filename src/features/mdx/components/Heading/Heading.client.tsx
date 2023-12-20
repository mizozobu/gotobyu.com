'use client';

import type { ComponentPropsWithoutRef } from 'react';
import { H1 as _H1 } from '@/components/atoms/H1';
import { H2 as _H2 } from '@/components/atoms/H2';
import { H3 as _H3 } from '@/components/atoms/H3';
import { SectionTitle } from '@/features/anchor';

/**
 * Props for {@link H1}, {@link H2}, and {@link H3} container
 */
interface Props
  extends Omit<ComponentPropsWithoutRef<typeof SectionTitle>, 'as'> {}

/**
 * Container compoenent for H1
 */
export const H1 = ({ ...props }: Props): JSX.Element => (
  <SectionTitle as={_H1} {...props} />
);

/**
 * Container compoenent for H2
 */
export const H2 = ({ ...props }: Props): JSX.Element => (
  <SectionTitle as={_H2} {...props} />
);

/**
 * Container compoenent for H3
 */
export const H3 = ({ ...props }: Props): JSX.Element => (
  <SectionTitle as={_H3} {...props} />
);
