type Props = {
  selector: string;
  styles: {
    [key: string]: string;
  };
};

export const Style = ({ selector, styles }: Props) => (
  <style jsx>{`
    ${selector} {
      ${Object.entries(styles)
        .map(([key, value]) => `${key}: ${value};`)
        .join('\n')}
    }
  `}</style>
);
