/**
 * Type for application deadline
 */
export interface ApplicationDeadline {
  /** Term(e.g. spring, summer, fall, winter) */
  term: string;
  /** Period when the term is held */
  period: string;
  /** Date the application opens at */
  openAt: string | undefined;
  /** Date the priority application closes at */
  priorityClosedAt: string | undefined;
  /** Date the application closes at */
  closedAt: string | undefined;
  /** Date the result is announced at */
  announcedAt: string | undefined;
}

/**
 * BYU application deadline
 * @see {@link https://enrollment.byu.edu/admissions/when-should-i-apply}
 */
export const BYU_APPLICATION_DEADLINE: ApplicationDeadline[] = [
  {
    term: '2022年 夏学期',
    period: '6月下旬 ~ 8月中旬',
    openAt: '8/25',
    priorityClosedAt: '11/1',
    closedAt: '12/16',
    announcedAt: '2/21',
  },
  {
    term: '2022年 秋学期',
    period: '9月初旬 ~ 12月中旬',
    openAt: '8/25',
    priorityClosedAt: '11/1',
    closedAt: '12/16',
    announcedAt: '2/21',
  },
  {
    term: '2023年 冬学期',
    period: '1月初旬 ~ 4月中旬',
    openAt: '4/1',
    priorityClosedAt: '-',
    closedAt: '8/1',
    announcedAt: '8/29',
  },
  {
    term: '2023年 春学期',
    period: '4月下旬 ~ 6月中旬',
    openAt: '8/24',
    priorityClosedAt: '11/1',
    closedAt: '12/15',
    announcedAt: '2/20',
  },
];

/**
 * BYUH application deadline
 * @see {@link https://hookele.byuh.edu/application-deadlines-decisions-schedule}
 */
export const BYUH_APPLICATION_DEADLINE: ApplicationDeadline[] = [
  {
    term: '秋学期',
    period: '9月初旬 ~ 12月中旬',
    openAt: '9/1',
    priorityClosedAt: '-',
    closedAt: '2/1',
    announcedAt: '3月',
  },
  {
    term: '冬学期',
    period: '1月初旬 ~ 4月中旬',
    openAt: '2/1',
    priorityClosedAt: '-',
    closedAt: '7/1',
    announcedAt: '8月',
  },
  {
    term: '春学期',
    period: '4月下旬 ~ 6月下旬',
    openAt: '7/1',
    priorityClosedAt: '-',
    closedAt: '11/1',
    announcedAt: '12月',
  },
];

/**
 * BYUI application deadline
 * @see {@link https://www.byui.edu/admissions/application-deadlines}
 */
export const BYUI_APPLICATION_DEADLINE: ApplicationDeadline[] = [
  {
    term: '秋学期',
    period: '9月中旬 ~ 12月中旬',
    openAt: '常時可',
    priorityClosedAt: '5/1',
    closedAt: '7/1',
    announcedAt: '申込後4週間以内',
  },
  {
    term: '冬学期',
    period: '1月初旬 ~ 4月初旬',
    openAt: '常時可',
    priorityClosedAt: '8/15',
    closedAt: '10/15',
    announcedAt: '申込後4週間以内',
  },
  {
    term: '春学期',
    period: '4月下旬 ~ 7月下旬',
    openAt: '常時可',
    priorityClosedAt: '12/1',
    closedAt: '2/1',
    announcedAt: '申込後4週間以内',
  },
];
