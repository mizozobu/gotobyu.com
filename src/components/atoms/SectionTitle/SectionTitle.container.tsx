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

  const handleClick = () => {
    const [, h] = router.asPath.split('#');
    setHash(decodeURIComponent(h));
    void navigator.clipboard.writeText(decodeHash(window.location.href));
  };

  return (
    <SectionTitle
      {...props}
      id={id}
      ref={ref}
      active={hash === id}
      onClick={handleClick}
    />
  );
};

export default SectionTitleContainer;
