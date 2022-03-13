import type { SchoolDataCollection } from './school';

/**
 * Type for English requirement
 */
export interface EnglishRequirement {
  /** Minimal required score for reading */
  reading: number | undefined;
  /** Minimal required score for writing */
  writing: number | undefined;
  /** Minimal required score for speaking */
  speaking: number | undefined;
  /** Minimal required score for listening */
  listening: number | undefined;
  /** Minimal required total score */
  total: number | undefined;
}

/**
 * Generic type for English requirement data collection for each school
 */
export interface EnglishExamCollection {
  /** TOEFL data */
  TOEFL: EnglishRequirement;
  /** IELTS data */
  IELTS: EnglishRequirement;
  /** PTE data */
  PTE: EnglishRequirement;
  /** EIKEN data */
  EIKEN: EnglishRequirement;
}

/**
 * TOEFL requirement
 * - BYU: @see {@link https://enrollment.byu.edu/admissions/english-proficiency-requirement}
 * - BYUH: @see {@link https://hookele.byuh.edu/admissions/english-test-requirements}
 * - BYUI: @see {@link https://www.byui.edu/admissions/apply/international-students/english-requirements}
 */
const TOEFL_REQUIREMENT: SchoolDataCollection<EnglishRequirement> = {
  byu: {
    reading: 20,
    writing: 20,
    speaking: 20,
    listening: 20,
    total: 80,
  },
  byuh: {
    reading: undefined,
    writing: 17,
    speaking: 17,
    listening: undefined,
    total: 61,
  },
  byui: {
    reading: 17,
    writing: 17,
    speaking: 16,
    listening: 16,
    total: 66,
  },
};

/**
 * IELTS requirement
 * - BYU: @see {@link https://enrollment.byu.edu/admissions/english-proficiency-requirement}
 * - BYUH: @see {@link https://hookele.byuh.edu/admissions/english-test-requirements}
 * - BYUI: @see {@link https://www.byui.edu/admissions/apply/international-students/english-requirements}
 */
const IELTS_REQUIREMENT: SchoolDataCollection<EnglishRequirement> = {
  byu: {
    reading: 6,
    writing: 6,
    speaking: 6.5,
    listening: 6,
    total: 6.5,
  },
  byuh: {
    reading: 5,
    writing: 5,
    speaking: 5,
    listening: 5,
    total: 5.5,
  },
  byui: {
    reading: 6,
    writing: 5,
    speaking: 5.5,
    listening: 6,
    total: 6,
  },
};

/**
 * PTE requirement
 * - BYU: @see {@link https://enrollment.byu.edu/admissions/english-proficiency-requirement}
 * - BYUH: @see {@link https://hookele.byuh.edu/admissions/english-test-requirements}
 * - BYUI: @see {@link https://www.byui.edu/admissions/apply/international-students/english-requirements}
 */
const PTE_REQUIREMENT: SchoolDataCollection<EnglishRequirement> = {
  byu: {
    reading: 49,
    writing: 49,
    speaking: 49,
    listening: 49,
    total: 53,
  },
  byuh: {
    reading: undefined,
    writing: undefined,
    speaking: undefined,
    listening: undefined,
    total: 44,
  },
  byui: {
    reading: 67,
    writing: 55,
    speaking: 59,
    listening: 67,
    total: 62,
  },
};

/**
 * EIKEN requirement
 * - BYUH: @see {@link https://hookele.byuh.edu/admissions/english-test-requirements}
 */
const EIKEN_REQUIREMENT: SchoolDataCollection<EnglishRequirement> = {
  byu: {
    reading: undefined,
    writing: undefined,
    speaking: undefined,
    listening: undefined,
    total: undefined,
  },
  byuh: {
    reading: 520,
    writing: 520,
    speaking: 520,
    listening: 520,
    total: 2150,
  },
  byui: {
    reading: undefined,
    writing: undefined,
    speaking: undefined,
    listening: undefined,
    total: undefined,
  },
};

/**
 * English requirement for BYU
 */
const BYU_REQUIREMENT: EnglishExamCollection = {
  TOEFL: TOEFL_REQUIREMENT.byu,
  IELTS: IELTS_REQUIREMENT.byu,
  PTE: PTE_REQUIREMENT.byu,
  EIKEN: EIKEN_REQUIREMENT.byu,
};

/**
 * English requirement for BYUH
 */
const BYUH_REQUIREMENT: EnglishExamCollection = {
  TOEFL: TOEFL_REQUIREMENT.byuh,
  IELTS: IELTS_REQUIREMENT.byuh,
  PTE: PTE_REQUIREMENT.byuh,
  EIKEN: EIKEN_REQUIREMENT.byuh,
};

/**
 * English requirement for BYUI
 */
const BYUI_REQUIREMENT: EnglishExamCollection = {
  TOEFL: TOEFL_REQUIREMENT.byui,
  IELTS: IELTS_REQUIREMENT.byui,
  PTE: PTE_REQUIREMENT.byui,
  EIKEN: EIKEN_REQUIREMENT.byui,
};

/**
 * English requirement by test
 */
export const ENGLISH_REQUIREMENT_BY_EXAM = {
  /** TOEFL requirement */
  TOEFL: TOEFL_REQUIREMENT,
  /** IELTS requirement */
  IELTS: IELTS_REQUIREMENT,
  /** PTE requirement */
  PTE: PTE_REQUIREMENT,
  /** EIKEN requirement */
  EIKEN: EIKEN_REQUIREMENT,
};

/**
 * English requirement by school
 */
export const ENGLISH_REQUIREMENT_BY_SCHOOL = {
  /** English requirement for BYU */
  byu: BYU_REQUIREMENT,
  /** English requirement for BYUH */
  byuh: BYUH_REQUIREMENT,
  /** English requirement for BYUI */
  byui: BYUI_REQUIREMENT,
};
