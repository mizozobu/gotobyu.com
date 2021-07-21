import { FC, HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<SVGElement> {
  animated?: boolean;
}

export const CirculatingCircles: FC<Props> = ({
  animated = false,
  ...props
}: Props) => (
  <svg
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    viewBox='0 0 700 700'
    shapeRendering='geometricPrecision'
    textRendering='geometricPrecision'
  >
    <style jsx>{`
      #byui_to {
        animation: byui_to__to 2400ms linear ${animated ? 'infinite' : '0'}
          normal forwards;
      }

      @keyframes byui_to__to {
        0% {
          offset-distance: 0%;
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }

        33.333333% {
          offset-distance: 33.333333%;
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }

        66.666667% {
          offset-distance: 66.666667%;
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }

        100% {
          offset-distance: 100%;
        }
      }

      #byuh_to {
        animation: byuh_to__to 2400ms linear ${animated ? 'infinite' : '0'}
          normal forwards;
      }

      @keyframes byuh_to__to {
        0% {
          offset-distance: 0%;
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }

        33.333333% {
          offset-distance: 33.333333%;
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }

        66.666667% {
          offset-distance: 66.666667%;
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }

        100% {
          offset-distance: 100%;
        }
      }

      #byu_to {
        animation: byu_to__to 2400ms linear ${animated ? 'infinite' : '0'}
          normal forwards;
      }

      @keyframes byu_to__to {
        0% {
          offset-distance: 0%;
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }

        33.333333% {
          offset-distance: 33.333333%;
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }

        66.666667% {
          offset-distance: 66.666667%;
          animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        }

        100% {
          offset-distance: 100%;
        }
      }
    `}</style>
    <g
      id='byui_to'
      style={{
        offsetPath:
          "path('M550,250C551.091739,351.102243,497.116258,550.362315,350,550C200.414810,550.109258,149.478741,350.160673,150,250C222.773981,176.443714,475.724574,176.626014,550,250')",
        offsetRotate: '0deg',
      }}
    >
      <ellipse
        id='byui'
        rx='50'
        ry='50'
        transform='translate(0,0)'
        fill='rgb(0,118,182)'
        stroke='none'
        strokeWidth='0'
        strokeMiterlimit='1'
      />
    </g>
    <g
      id='byuh_to'
      style={{
        offsetPath:
          "path('M150,250C222.917100,177.224977,477.274318,177.337711,550,250C550.951484,352.078839,449.539643,550.388631,350,550C249.282066,551.315985,150.448024,352.653713,150,250')",
        offsetRotate: '0deg',
      }}
    >
      <ellipse
        id='byuh'
        rx='50'
        ry='50'
        transform='translate(0,0)'
        fill='rgb(158,27,52)'
        stroke='none'
        strokeWidth='0'
        strokeMiterlimit='1'
      />
    </g>
    <g
      id='byu_to'
      style={{
        offsetPath:
          "path('M350,550C251.004855,550.997549,150.856107,349.803886,150,250C223.650470,175.627575,477.415486,177.867038,550,250C551.060605,350.176031,452.854461,549.570908,350,551.098544')",
        offsetRotate: '0deg',
      }}
    >
      <ellipse
        id='byu'
        rx='50'
        ry='50'
        transform='translate(-0,0)'
        fill='rgb(0,46,93)'
        stroke='none'
        strokeWidth='0'
        strokeLinecap='round'
        strokeMiterlimit='1'
        strokeDashoffset='100'
      />
    </g>
  </svg>
);
