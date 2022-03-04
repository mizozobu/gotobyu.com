import dynamic from 'next/dynamic';
import type { Props } from '@cmp/ecosystems/shared/CopiedDialog';

export const DynamicCopiedDialog = dynamic<Props>(() =>
  import('@cmp/ecosystems/shared/CopiedDialog').then(
    ({ CopiedDialog: Component }) => Component,
  ),
);
