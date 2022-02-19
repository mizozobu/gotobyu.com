import type { ComponentPropsWithoutRef } from 'react';
import { SectionTitle as _SectionTitle } from '@cmp/molecules/SectionTitle';
import { useSmoothScroll } from '@l/useSmoothScroll';

interface Props
  extends Omit<
    ComponentPropsWithoutRef<typeof _SectionTitle>,
    'active' | 'onClick'
  > {}

export const SectionTitle = ({ id, as, children, ...props }: Props) => {
  const { active, handleClick } = useSmoothScroll(id);
  const encodedId = encodeURIComponent(id);

  return (
    <_SectionTitle
      {...props}
      as={as}
      id={encodedId}
      active={active}
      onClick={handleClick}
    >
      {children}
    </_SectionTitle>
  );
};
