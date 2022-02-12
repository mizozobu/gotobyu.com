import type { ComponentPropsWithoutRef } from 'react';

interface Props extends Omit<ComponentPropsWithoutRef<'path'>, 'd'> {
  r: number;
  angle: number;
}

/**
 * @see http://www.yamatyuu.net/computer/html/svg/arc.html
 */
export const PartialCircle = ({ r, angle, ...props }: Props) => {
  const x2 = 0 + r * Math.cos((angle - 90) * (Math.PI / 180));
  const y2 = 0 + r * Math.sin((angle - 90) * (Math.PI / 180));
  const f1 = angle > 180 ? 1 : 0;

  return (
    <path
      d={`
        M 0,${-r}
        A ${r},${r} 0 ${f1},1 ${x2},${y2}
        L 0,0
      `}
      {...props}
    />
  );
};
