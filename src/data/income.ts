/**
 * Type for first year income
 */
export interface FirstYearIncome {
  /** Average first year income of normal grads */
  average: number;
  /** Average first year income of BYUs grads */
  byusAverage: number;
}

/**
 * First year income
 * @see {@link https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&toukei=00450091&tstat=000001011429&cycle=0&tclass1=000001152186&tclass2=000001152187&tclass3=000001152195&stat_infid=000032069485&tclass4val=0}
 * @see {@link https://www.e-stat.go.jp/stat-search/files?page=1&layout=datalist&toukei=00450091&tstat=000001011429&cycle=0&tclass1=000001152186&tclass2=000001152187&tclass3=000001152188&stat_infid=000032069351&cycle_facet=cycle&tclass4val=0}
 */
export const FIRST_YEAR_INCOME: FirstYearIncome = {
  average: 22.6 * 12 + 48.21,
  byusAverage: 523,
};

/**
 * Type for first year income
 */
export interface InternshipSalary {
  /** ¥0 */
  _0: number;
  /** ¥0 ~ ¥100,000 */
  _0to10: number;
  /** ¥100,000 ~ ¥200,000 */
  _10to20: number;
  /** ¥200,000 ~ ¥300,000 */
  _20to30: number;
  /** ¥300,000 ~ */
  _30over: number;
}

/**
 * First year income
 */
export const INTERNSHIP_SALARY: InternshipSalary = {
  _0: 22.7,
  _0to10: 22.7,
  _10to20: 13.6,
  _20to30: 22.7,
  _30over: 18.2,
};
