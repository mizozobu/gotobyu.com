import type { SchoolDataCollection } from './school';

/**
 * Type for cost of attendance
 */
export interface ConstOfAttendance {
  /** Tuition in USD */
  tuition: number;
  /** Housing cost in USD */
  housing: number;
  /** Books cost in USD */
  books: number;
  /** Personal cost in USD */
  personal: number;
  /** Transportation cost in USD */
  transportation: number;
  /** Load cost in USD */
  loan: number;
}

/**
 * Cost of attendance for a semester
 * - BYU: @see {@link https://enrollment.byu.edu/financial-aid/cost-of-attendance}
 * - BYUH: @see {@link https://financialaid.byuh.edu/cost-of-attendance}
 * - BYUI: @see {@link https://www.byui.edu/financial-aid/cost-of-attendance}
 */
export const COST_OF_ATTENDACE: SchoolDataCollection<ConstOfAttendance> = {
  byu: {
    tuition: 6496 / 2,
    housing: 9720 / 2,
    books: 1040 / 2,
    personal: 2808 / 2,
    transportation: 2928 / 2,
    loan: 60 / 2,
  },
  byuh: {
    tuition: 8582 / 2.5,
    housing: 12443 / 2.5,
    books: 1965 / 2.5,
    personal: 1965 / 2.5,
    transportation: 480 / 2.5,
    loan: 0 / 2.5,
  },
  byui: {
    tuition: 2328,
    housing: 2534,
    books: 275,
    personal: 1386,
    transportation: 1162,
    loan: 24,
  },
};

/**
 * Tuition adjusted based on the number of semesters
 */
export const TUITION = {
  /** BYU cost (2 semsters) in USD */
  byu: COST_OF_ATTENDACE.byu.tuition * 2,
  /** BYUH cost (2.5 semsters) in USD */
  byuh: COST_OF_ATTENDACE.byuh.tuition * 2.5,
  /** BYUI cost (2 semsters) in USD */
  byui: COST_OF_ATTENDACE.byui.tuition * 2,
  /**
   * JP kokuritsu school cost in JPY
   * @see {@link https://www.mext.go.jp/content/20211224-mxt_sigakujo-000019681_4.pdf}
   */
  jpKokuritsu: 535800,
  /**
   * JP shiritsu school cost in JPY
   * @see {@link https://www.mext.go.jp/content/20211224-mxt_sigakujo-000019681_4.pdf}
   */
  jpShiritsu: 930943,
  /**
   * US public school cost in USD
   * @see {@link https://nces.ed.gov/fastfacts/display.asp?id=76}
   */
  usPublic: 9678,
  /**
   * US private school cost in USD
   * @see {@link https://nces.ed.gov/fastfacts/display.asp?id=76}
   */
  usPrivate: 17825,
};
