import { type Algoliast, type HeadingTag } from '@/features/search';
import { type HeadingDepth } from '../types';

/**
 * Build {@link Algoliast} from hast tree
 */
export class AlgoliastBuilder {
  /** Base url for permalink */
  private readonly baseUrl: string;
  /** Heading max depth */
  private readonly MAX_DEPTH: number = 6;
  /** Array of {@link Algoliast} */
  private algoliasts: Algoliast[] = [];
  /** Current {@link Algoliast} */
  private current: Algoliast = {
    permalink: '',
    h1: '',
    h2: '',
    h3: '',
    h4: '',
    h5: '',
    h6: '',
    content: '',
    _tags: [],
  };

  /**
   * @constructor
   * @param baseUrl Base url for permalink
   * e.g. https://example.com
   */
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.current._tags = [baseUrl];
  }

  /**
   * Reset headings below the specified depth
   * @param tag heading tag name
   */
  private resetHeadings(tag: HeadingTag): void {
    const depth = +tag.slice(-1) as HeadingDepth;
    for (let i = depth; i <= this.MAX_DEPTH; i += 1) {
      this.current[`h${i}`] = '';
    }
  }

  /**
   * Set heading at the specified depth
   * @param tag Heading tag name
   * @param value Heading title
   */
  public setHeading(tag: HeadingTag, value: string): void {
    this.resetHeadings(tag);
    this.current.permalink = `${this.baseUrl}#${value}`;
    this.current[tag] = value;
  }

  /**
   * Set content
   * @param content Content body
   */
  public setContent(content: string): void {
    this.current.content = content;
  }

  /**
   * Add {@link Algoliast}
   */
  public add(algoliast: Algoliast): void {
    this.algoliasts.push(algoliast);
  }

  /**
   * Getter for algoliasts
   * @returns Array of {@link Algoliast}
   */
  public getAlgoliasts(): Algoliast[] {
    return this.algoliasts;
  }

  /**
   * Get current {@link Algoliast}
   * @returns Current {@link Algoliast}
   */
  public getCurrentAlgoliast(): Algoliast {
    return { ...this.current };
  }

  /**
   * Get last {@link Algoliast}
   * @returns Last {@link Algoliast}
   */
  public getLastAlgoliast(): Algoliast | undefined {
    return this.algoliasts[this.algoliasts.length - 1];
  }
}
