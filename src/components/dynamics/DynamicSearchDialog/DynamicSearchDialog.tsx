import dynamic from 'next/dynamic';
import type { Props } from '@cmp/ecosystems/SearchDialog';

export const DynamicSearchDialog = dynamic<Props>(
  () =>
    import('@cmp/ecosystems/SearchDialog').then(
      ({ SearchDialog: Component }) => Component,
    ),
  { ssr: false },
);
