import classNames from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';
import { PartialCircle } from '@c/atoms/PartialCircle';

/**
 * Props for {@link PieChartLoader}
 */
interface Props
  extends Omit<ComponentPropsWithoutRef<'svg'>, 'viewBox' | 'height'> {}

/**
 * Loader for pie chart
 */
export const PieChartLoader = ({ className, ...props }: Props): JSX.Element => {
  const r = 50;

  return (
    <div className='flex h-full w-full items-center justify-center'>
      <svg
        className={classNames(className, 'aspect-square')}
        height='80%'
        viewBox={`0 0 ${50 * 2} ${50 * 2}`}
        {...props}
      >
        <g transform={`translate(${r}, ${r})`} className='animate-pulse'>
          <PartialCircle
            className='fill-slate-100'
            r={r}
            angle={210}
            transform='rotate(0)'
          />
          <PartialCircle
            className='fill-slate-200'
            r={r}
            angle={90}
            transform='rotate(210)'
          />
          <PartialCircle
            className='fill-slate-300'
            r={r}
            angle={40}
            transform='rotate(300)'
          />
          <PartialCircle
            className='fill-slate-400'
            r={r}
            angle={20}
            transform='rotate(340)'
          />
        </g>
      </svg>
    </div>
  );
};
