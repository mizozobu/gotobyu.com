import { useEffect, useState, FC } from 'react';
import { useRouter } from 'next/router';
import { SectionTitle, Props as SectionTitleProps } from './SectionTitle';

export interface Props extends Omit<SectionTitleProps, 'active'> {}

const SectionTitleContainer: FC<Props> = ({ id, ...props }: Props) => {
  const [active, setActive] = useState(false);
  const router = useRouter();
  const [, hash] = router.asPath.split('#');

  useEffect(() => {
    setActive(decodeURIComponent(hash) === id);
  }, [hash, id]);

  const handleClick = () => {
    if (navigator.clipboard && window.isSecureContext) {
      const { origin, pathname } = window.location;
      void navigator.clipboard.writeText(`${origin}${pathname}#${id}`);
    }
  };

  return (
    <SectionTitle {...props} id={id} active={active} onClick={handleClick} />
  );
};

export default SectionTitleContainer;
