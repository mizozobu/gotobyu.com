import dynamic from 'next/dynamic';
import type { Props } from '@c/ecosystems/shared/CopiedDialog';

export const DynamicCopiedDialog = dynamic<Props>(() =>
  import('@c/ecosystems/shared/CopiedDialog').then(
    ({ CopiedDialog: Component }) => Component,
  ),
);
