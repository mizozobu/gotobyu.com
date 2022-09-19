import dynamic from 'next/dynamic';
import { ImageLoader } from '@/components/molecules/ImageLoader';
import type { Props } from '@/components/molecules/PhotoViewer';

/**
 * Dynamically imported PhotoViewer with loader
 */
export const DynamicPhotoViewer = dynamic<Props>(
  () =>
    import('@/components/molecules/PhotoViewer').then(
      ({ PhotoViewer: Component }) => Component,
    ),
  { loading: () => <ImageLoader data-testid='loader' /> },
);
