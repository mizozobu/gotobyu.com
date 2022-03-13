import type { ValuesType } from 'utility-types';
import type { SchoolDataCollection } from './school';

/**
 * Score master
 */
const SCORE = {
  NOT_SPECIFIED: '指定なし',
  NOT_APPLICABLE: 'N/A',
} as const;

/**
 * Type for English requirement
 */
export interface EnglishRequirement {
  /** Minimal required score for reading */
  reading: number | ValuesType<typeof SCORE>;
  /** Minimal required score for writing */
  writing: number | ValuesType<typeof SCORE>;
  /** Minimal required score for speaking */
  speaking: number | ValuesType<typeof SCORE>;
  /** Minimal required score for listening */
  listening: number | ValuesType<typeof SCORE>;
  /** Minimal required score for use of english */
  useOfEnglish: number | ValuesType<typeof SCORE>;
  /** Minimal required total score */
  total: number | ValuesType<typeof SCORE>;
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
  /** Cambridge English data */
  cambridge: EnglishRequirement;
  /** Eiken data */
  eiken: EnglishRequirement;
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
    useOfEnglish: SCORE.NOT_APPLICABLE,
    total: 80,
  },
  byuh: {
    reading: SCORE.NOT_SPECIFIED,
    writing: 17,
    speaking: 17,
    listening: SCORE.NOT_SPECIFIED,
    useOfEnglish: SCORE.NOT_APPLICABLE,
    total: 61,
  },
  byui: {
    reading: 17,
    writing: 17,
    speaking: 16,
    listening: 16,
    useOfEnglish: SCORE.NOT_APPLICABLE,
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
    useOfEnglish: SCORE.NOT_APPLICABLE,
    total: 6.5,
  },
  byuh: {
    reading: 5,
    writing: 5,
    speaking: 5,
    listening: 5,
    useOfEnglish: SCORE.NOT_APPLICABLE,
    total: 5.5,
  },
  byui: {
    reading: 6,
    writing: 5,
    speaking: 5.5,
    listening: 6,
    useOfEnglish: SCORE.NOT_APPLICABLE,
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
    useOfEnglish: SCORE.NOT_APPLICABLE,
    total: 53,
  },
  byuh: {
    reading: SCORE.NOT_SPECIFIED,
    writing: SCORE.NOT_SPECIFIED,
    speaking: SCORE.NOT_SPECIFIED,
    listening: SCORE.NOT_SPECIFIED,
    useOfEnglish: SCORE.NOT_APPLICABLE,
    total: 44,
  },
  byui: {
    reading: 67,
    writing: 55,
    speaking: 59,
    listening: 67,
    useOfEnglish: SCORE.NOT_APPLICABLE,
    total: 62,
  },
};

/**
 * Cambridge English requirement
 * - BYU: @see {@link https://enrollment.byu.edu/admissions/english-proficiency-requirement}
 * - BYUI: @see {@link https://www.byui.edu/admissions/apply/international-students/english-requirements}
 */
const CAMBRIDGE_REQUIREMENT: SchoolDataCollection<EnglishRequirement> = {
  byu: {
    reading: 172,
    writing: 172,
    speaking: 180,
    listening: 172,
    useOfEnglish: 180,
    total: 180,
  },
  byuh: {
    reading: SCORE.NOT_APPLICABLE,
    writing: SCORE.NOT_APPLICABLE,
    speaking: SCORE.NOT_APPLICABLE,
    listening: SCORE.NOT_APPLICABLE,
    useOfEnglish: SCORE.NOT_APPLICABLE,
    total: SCORE.NOT_APPLICABLE,
  },
  byui: {
    reading: 169,
    writing: 154,
    speaking: 162,
    listening: 169,
    useOfEnglish: 169,
    total: 169,
  },
};

/**
 * Eiken requirement
 * - BYUH: @see {@link https://hookele.byuh.edu/admissions/english-test-requirements}
 */
const EIKEN_REQUIREMENT: SchoolDataCollection<EnglishRequirement> = {
  byu: {
    reading: SCORE.NOT_APPLICABLE,
    writing: SCORE.NOT_APPLICABLE,
    speaking: SCORE.NOT_APPLICABLE,
    listening: SCORE.NOT_APPLICABLE,
    useOfEnglish: SCORE.NOT_APPLICABLE,
    total: SCORE.NOT_APPLICABLE,
  },
  byuh: {
    reading: 520,
    writing: 520,
    speaking: 520,
    listening: 520,
    useOfEnglish: SCORE.NOT_APPLICABLE,
    total: 2150,
  },
  byui: {
    reading: SCORE.NOT_APPLICABLE,
    writing: SCORE.NOT_APPLICABLE,
    speaking: SCORE.NOT_APPLICABLE,
    listening: SCORE.NOT_APPLICABLE,
    useOfEnglish: SCORE.NOT_APPLICABLE,
    total: SCORE.NOT_APPLICABLE,
  },
};

/**
 * English requirement for BYU
 */
const BYU_REQUIREMENT: EnglishExamCollection = {
  TOEFL: TOEFL_REQUIREMENT.byu,
  IELTS: IELTS_REQUIREMENT.byu,
  PTE: PTE_REQUIREMENT.byu,
  cambridge: CAMBRIDGE_REQUIREMENT.byu,
  eiken: EIKEN_REQUIREMENT.byu,
};

/**
 * English requirement for BYUH
 */
const BYUH_REQUIREMENT: EnglishExamCollection = {
  TOEFL: TOEFL_REQUIREMENT.byuh,
  IELTS: IELTS_REQUIREMENT.byuh,
  PTE: PTE_REQUIREMENT.byuh,
  cambridge: CAMBRIDGE_REQUIREMENT.byuh,
  eiken: EIKEN_REQUIREMENT.byuh,
};

/**
 * English requirement for BYUI
 */
const BYUI_REQUIREMENT: EnglishExamCollection = {
  TOEFL: TOEFL_REQUIREMENT.byui,
  IELTS: IELTS_REQUIREMENT.byui,
  PTE: PTE_REQUIREMENT.byui,
  cambridge: CAMBRIDGE_REQUIREMENT.byui,
  eiken: EIKEN_REQUIREMENT.byui,
};

/**
 * English requirement by exam
 */
export const ENGLISH_REQUIREMENT_BY_EXAM = {
  /** TOEFL requirement */
  TOEFL: TOEFL_REQUIREMENT,
  /** IELTS requirement */
  IELTS: IELTS_REQUIREMENT,
  /** PTE requirement */
  PTE: PTE_REQUIREMENT,
  /** Cambridge English requirement */
  cambridge: CAMBRIDGE_REQUIREMENT,
  /** Eiken requirement */
  eiken: EIKEN_REQUIREMENT,
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
