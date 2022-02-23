import dynamic from 'next/dynamic';
import type { Props } from '@cmp/organisms/SearchDialog';

export const DynamicSearchDialog = dynamic<Props>(
  () =>
    import('@cmp/organisms/SearchDialog').then(
      ({ SearchDialog: Component }) => Component,
    ),
  { ssr: false },
);
