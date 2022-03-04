import dynamic from 'next/dynamic';
import type { Props } from '@cmp/ecosystems/shared/SearchDialog';

export const DynamicSearchDialog = dynamic<Props>(
  () =>
    import('@cmp/ecosystems/shared/SearchDialog').then(
      ({ SearchDialog: Component }) => Component,
    ),
  { ssr: false },
);
