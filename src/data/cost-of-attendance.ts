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
 * Cost of attendance
 * - BYU: @see {@link https://enrollment.byu.edu/financial-aid/cost-of-attendance}
 * - BYUH: @see {@link https://financialaid.byuh.edu/cost-of-attendance}
 * - BYUI: @see {@link https://www.byui.edu/financial-aid/cost-of-attendance}
 */
export const COST_OF_ATTENDACE: SchoolDataCollection<ConstOfAttendance> = {
  byu: {
    tuition: 5970 / 2,
    housing: 7808 / 2,
    books: 896 / 2,
    personal: 2408 / 2,
    transportation: 2512 / 2,
    loan: 60 / 2,
  },
  byuh: {
    tuition: 8091 / 3,
    housing: 10517 / 3,
    books: 1965 / 3,
    personal: 1890 / 3,
    transportation: 450 / 3,
    loan: 0 / 2,
  },
  byui: {
    tuition: 2150,
    housing: 2184,
    books: 200,
    personal: 1192,
    transportation: 630,
    loan: 0 / 2,
  },
};

/**
 * Tuition adjusted based on the number of semesters
 */
export const TUITION = {
  /** BYU cost (2 semsters) in USD */
  byu: COST_OF_ATTENDACE.byu.tuition * 2,
  /** BYUH cost (3 semsters) in USD */
  byuh: COST_OF_ATTENDACE.byuh.tuition * 3,
  /** BYUI cost (2 semsters) in USD */
  byui: COST_OF_ATTENDACE.byui.tuition * 2,
  /**
   * JP kokuritsu school cost in JPY
   * @see {@link https://www.mext.go.jp/a_menu/koutou/shinkou/07021403/__icsFiles/afieldfile/2017/12/26/1399613_03.pdf}
   */
  jpKokuritsu: 535800,
  /**
   * JP shiritsu school cost in JPY
   * @see {@link https://www.mext.go.jp/a_menu/koutou/shinkou/07021403/__icsFiles/afieldfile/2017/12/26/1399613_03.pdf}
   */
  jpShiritsu: 877735,
  /**
   * US public school cost in USD
   * @see {@link https://nces.ed.gov/fastfacts/display.asp?id=76}
   */
  usPublic: 21184,
  /**
   * US private school cost in USD
   * @see {@link https://nces.ed.gov/fastfacts/display.asp?id=76}
   */
  usPrivate: 35087,
};
