import classNames from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';

/**
 * Props for BarChartLoader
 */
interface Props
  extends Omit<ComponentPropsWithoutRef<'svg'>, 'viewBox' | 'height'> {
  /** The number of bars in loader */
  barCount?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
}

/**
 * Loader for bar chart
 */
export const BarChartLoader = ({
  barCount = 5,
  className,
  ...props
}: Props) => {
  const nBar = barCount;
  const nGap = barCount + 1;
  const barToGapRatio = 2;
  const gapWidth = 100 / (barToGapRatio * nBar + nGap);
  const barWidth = barToGapRatio * gapWidth;

  const getFillClass = (i: number) => {
    switch (i) {
      case 0:
        return 'fill-slate-100';
      case 1:
        return 'fill-slate-200';
      case 2:
        return 'fill-slate-300';
      case 3:
        return 'fill-slate-400';
      case 4:
        return 'fill-slate-500';
      case 5:
        return 'fill-slate-600';
      case 6:
        return 'fill-slate-700';
      case 7:
        return 'fill-slate-800';
      case 8:
        return 'fill-slate-900';
      default:
        return '';
    }
  };

  return (
    <div className='flex h-full w-full items-center justify-center'>
      <svg
        className={classNames(className, 'h-full w-full p-8')}
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
        {...props}
      >
        {/* stroke width offset */}
        <g transform='translate(0, -1)' className='animate-pulse'>
          <line
            className='stroke-slate-200 stroke-1'
            x1='0'
            y1='0'
            x2='0'
            y2='100'
          />
          {Array.from(Array(barCount).keys()).map((i) => (
            <rect
              key={i}
              className={getFillClass(i)}
              x={(barWidth + gapWidth) * i + gapWidth}
              y={100 - ((i + 1) * 100) / barCount}
              width={barWidth}
              height={((i + 1) * 100) / barCount}
            />
          ))}
          <line
            className='stroke-slate-200 stroke-1'
            x1='0'
            y1='100'
            x2='100'
            y2='100'
          />
        </g>
      </svg>
    </div>
  );
};
