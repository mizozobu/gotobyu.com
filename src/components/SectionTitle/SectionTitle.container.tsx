import { useEffect, useState, useRef, FC } from 'react';
import { useRouter } from 'next/router';
import { SectionTitle, Props as SectionTitleProps } from './SectionTitle';

export interface Props extends Omit<SectionTitleProps, 'active'> {}

const decodeHash = (url: string) => {
  const [p, h] = url.split('#');
  return `${p}${h ? `#${decodeURIComponent(h)}` : ''}`;
};

const SectionTitleContainer: FC<Props> = ({ id, ...props }: Props) => {
  const [hash, setHash] = useState('');
  const router = useRouter();
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const [, h] = router.asPath.split('#');
    setHash(decodeURIComponent(h));
    void navigator.clipboard.writeText(decodeHash(window.location.href));
  }, [router.asPath]);

  useEffect(() => {
    const h = decodeURIComponent(router.asPath.split('#')[1]);

    if (id === h) {
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <SectionTitle {...props} id={id} ref={ref} active={hash === id} />;
};
export default SectionTitleContainer;
