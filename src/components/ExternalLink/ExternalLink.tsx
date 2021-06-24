import { useState, useRef, FC, AnchorHTMLAttributes, useEffect } from 'react';
import { ExternalLinkIcon } from '@heroicons/react/solid';

export interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const ExternalLink: FC<Props> = ({
  className = '',
  children,
  ...props
}: Props) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [iconHeight, setIconHeight] = useState('0px');

  useEffect(() => {
    const el = ref.current;

    if (el != null) {
      setIconHeight(window.getComputedStyle(el).fontSize);
    }
  }, [setIconHeight]);

  return (
    <a
      {...props}
      ref={ref}
      target='_blank'
      rel='noreferrer'
      className={`px-1 rounded-md text-indigo-500 bg-indigo-50 font-medium cursor-pointer ${className}`}
    >
      {children}
      <ExternalLinkIcon
        className='inline align-top'
        style={{ height: iconHeight }}
      />
    </a>
  );
};
