import { useEffect, useState, FC } from 'react';
import { useRouter } from 'next/router';
import { Header, Props as HeaderProps } from './Header';

export interface Props extends Omit<HeaderProps, 'loading'> {}

const HeaderContainer: FC<Props> = () => {
  const [loading, setLoading] = useState(false);
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

  return <Header loading={loading} />;
};

export default HeaderContainer;
