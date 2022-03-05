import dynamic from 'next/dynamic';
import { ImageLoader } from '@c/molecules/ImageLoader';
import type { Props } from '@c/molecules/PhotoViewer';

/**
 * Dynamic PhotoViewer with loader
 */
export const DynamicPhotoViewer = dynamic<Props>(
  () =>
    import('@c/molecules/PhotoViewer').then(
      ({ PhotoViewer: Component }) => Component,
    ),
  { loading: () => <ImageLoader /> },
);
