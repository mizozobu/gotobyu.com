import dynamic from 'next/dynamic';
import type { Props } from '@cnt/CopiedDialog';

export const DynamicCopiedDialog = dynamic<Props>(() =>
  import('@cnt/CopiedDialog').then(({ CopiedDialog: Component }) => Component),
);
