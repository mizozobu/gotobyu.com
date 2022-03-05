import dynamic from 'next/dynamic';
import type { Props } from '@c/ecosystems/shared/SearchDialog';

/**
 * Dynamic SearchDialog with loader
 */
export const DynamicSearchDialog = dynamic<Props>(
  () =>
    import('@c/ecosystems/shared/SearchDialog').then(
      ({ SearchDialog: Component }) => Component,
    ),
  { ssr: false },
);
