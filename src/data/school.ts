/**
 * Generic type for data collection for each school
 */
export interface SchoolDataCollection<T> {
  /** BYU data */
  byu: T;
  /** BYUH data */
  byuh: T;
  /** BYUI data */
  byui: T;
}

/**
 * Type for school info
 */
export interface SchoolInfo {
  /** Number of students */
  numberOfStudents: number;
  /** International student ratio */
  internationStudentRatio: number;
  /** Student to faculty ratio */
  studentToFaculty: string;
  /** Number of majors */
  numberOfMajors: number;
  /** Number of courses */
  numberOfCourses: number;
  /** Acceptance rate */
  acceptanceRate: number;
}

/**
 * School info
 *
 * | | BYU | BYUH | BYUI |
 * | -- | -- | -- | -- |
 * | Number of students | https://www.byu.edu/facts-figures | https://about.byuh.edu/00000177-1ce4-d89c-af77-7df626210000/20-11-09-quickfactsupdate-pdf | https://www.byui.edu/executive-strategy-and-planning/institutional-data/official-enrollment-statistics |
 * | International student ratio | https://www.collegefactual.com/colleges/brigham-young-university-provo/student-life/international/ | https://about.byuh.edu/00000177-1ce4-d89c-af77-7df626210000/20-11-09-quickfactsupdate-pdf | https://www.collegefactual.com/colleges/brigham-young-university-idaho/student-life/international/ |
 * | Student to faculty ratio | https://www.usnews.com/best-colleges/byu-3670 | https://www.byuh.edu/academics | https://www.communitycollegereview.com/brigham-young-university-idaho-profile |
 * | Number of majors | https://www.byu.edu/facts-figures | https://www.byuh.edu/academics, https://holokai.byuh.edu/programs-of-study# | https://www.byui.edu/campus-career-and-academic-advising/career-and-major-exploration/major-to-career |
 * | Number of courses | https://catalog.byu.edu/courses | https://catalog.byuh.edu/courses | https://www.byui.edu/catalog#/courses |
 * | Acceptance rate | https://www.byu.edu/admissions | https://www.byuh.edu/admissions-aid | https://www.byui.edu/admissions/application-help/academic-requirements |
 */
export const SCHOOL_INFO: SchoolDataCollection<SchoolInfo> = {
  byu: {
    numberOfStudents: 31627,
    internationStudentRatio: 3.8,
    studentToFaculty: '21:1',
    numberOfMajors: 190,
    numberOfCourses: 5715,
    acceptanceRate: 0.59,
  },
  byuh: {
    numberOfStudents: 3096,
    internationStudentRatio: 48,
    studentToFaculty: '16:1',
    numberOfMajors: 37,
    numberOfCourses: 930,
    acceptanceRate: 0.42,
  },
  byui: {
    numberOfStudents: 23703,
    internationStudentRatio: 15.5,
    studentToFaculty: '19:1',
    numberOfMajors: 77,
    numberOfCourses: 2109,
    acceptanceRate: 0.96,
  },
};
