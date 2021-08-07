import { useEffect, useState, FC } from 'react';
import { useRouter } from 'next/router';
import { useScrollDirection, ScrollDirection } from '@l/ScrollDirection';
import { Header, Props as HeaderProps } from './Header';

export interface Props extends Omit<HeaderProps, 'loading'> {}

const HeaderContainer: FC<Props> = () => {
  const [loading, setLoading] = useState(false);
  const scrollDirectionY = useScrollDirection({ threshold: 0 });
  const router = useRouter();

  useEffect(() => {
    const startLoading = () => setLoading(true);
    const endLoading = () => {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    router.events.on('routeChangeStart', startLoading);
    router.events.on('routeChangeComplete', endLoading);

    return () => {
      router.events.off('routeChangeStart', startLoading);
      router.events.off('routeChangeComplete', endLoading);
    };
  }, [router]);

  return (
    <Header show={scrollDirectionY === ScrollDirection.up} loading={loading} />
  );
};

export default HeaderContainer;
