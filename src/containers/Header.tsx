import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Header as _Header } from '@cmp/organisms/Header';
import { useScrollDirection, SCROLL_DIRECTION } from '@l/scrollDirection';

export const Header = () => {
  const [loading, setLoading] = useState(false);
  const scrollDirectionY = useScrollDirection({ threshold: 50 });
  const router = useRouter();

  useEffect(() => {
    const startLoading = () => setLoading(true);
    const endLoading = () => setLoading(false);

    router.events.on('routeChangeStart', startLoading);
    router.events.on('routeChangeComplete', endLoading);

    return () => {
      router.events.off('routeChangeStart', startLoading);
      router.events.off('routeChangeComplete', endLoading);
    };
  }, [router.events]);

  return (
    <_Header
      show={scrollDirectionY === SCROLL_DIRECTION.up}
      loading={loading}
    />
  );
};
