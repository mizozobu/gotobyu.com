/**
 * type for equal function
 */
export interface Compare<T> {
  (a: T, b: T): boolean;
}
