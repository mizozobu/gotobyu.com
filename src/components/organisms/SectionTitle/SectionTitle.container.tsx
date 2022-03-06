import type { ComponentPropsWithoutRef } from 'react';
import { SectionTitle as _SectionTitle } from '@c/atoms/SectionTitle';
import { useAnchorLink } from '@l/useAnchorLink';

/**
 * Props for {@link SectionTitle} container
 */
interface Props
  extends Omit<
    ComponentPropsWithoutRef<typeof _SectionTitle>,
    'active' | 'onClick'
  > {}

/**
 * Container component for {@link _SectionTitle SectionTitle}
 */
export const SectionTitle = ({
  id = '',
  as,
  children,
  ...props
}: Props): JSX.Element => {
  const { active, handleClick } = useAnchorLink(id);
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
