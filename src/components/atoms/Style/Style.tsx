/**
 * Props for Style
 */
type Props = {
  /** CSS selector for the style */
  selector: string;
  /** Style */
  styles: {
    [key: string]: string;
  };
};

/**
 * `<style>` made easier
 */
export const Style = ({ selector, styles }: Props) => (
  <style jsx>{`
    ${selector} {
      ${Object.entries(styles)
        .map(([key, value]) => `${key}: ${value};`)
        .join('\n')}
    }
  `}</style>
);
