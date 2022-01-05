// https://enrollment.byu.edu/admissions/english-proficiency-requirement
// https://hookele.byuh.edu/admissions/english-test-requirements
// https://www.byui.edu/admissions/apply/international-students/english-requirements

export interface EnglishRequirement {
  byu: {
    reading: number | undefined;
    writing: number | undefined;
    speaking: number | undefined;
    listening: number | undefined;
    total: number | undefined;
  };
  byuh: {
    reading: number | undefined;
    writing: number | undefined;
    speaking: number | undefined;
    listening: number | undefined;
    total: number | undefined;
  };
  byui: {
    reading: number | undefined;
    writing: number | undefined;
    speaking: number | undefined;
    listening: number | undefined;
    total: number | undefined;
  };
}

export const TOEFLData: EnglishRequirement = {
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

export const IELTSData: EnglishRequirement = {
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

export const PTEdata: EnglishRequirement = {
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

export const EIKENData: EnglishRequirement = {
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
