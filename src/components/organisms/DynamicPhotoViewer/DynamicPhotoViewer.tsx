import dynamic from 'next/dynamic';
import { ImageLoader } from '@cmp/molecules/ImageLoader';
import type { Props } from '@cmp/molecules/PhotoViewer';

export const DynamicPhotoViewer = dynamic<Props>(
  () =>
    import('@cmp/molecules/PhotoViewer').then(
      ({ PhotoViewer: Component }) => Component,
    ),
  { loading: () => <ImageLoader /> },
);
