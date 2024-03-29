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
 * | Number of students | https://www.byu.edu/facts-figures | https://admissions.byuh.edu/admission-criteria | https://www.byui.edu/executive-strategy-and-planning/institutional-data/official-enrollment-statistics |
 * | International student ratio | https://www.collegefactual.com/colleges/brigham-young-university-provo/student-life/international/ | https://admissions.byuh.edu/admission-criteria | https://www.collegefactual.com/colleges/brigham-young-university-idaho/student-life/international/ |
 * | Student to faculty ratio | https://www.usnews.com/best-colleges/byu-3670 | https://admissions.byuh.edu/admission-criteria | https://www.communitycollegereview.com/brigham-young-university-idaho-profile |
 * | Number of majors | https://www.byu.edu/facts-figures | https://www.byuh.edu/academics | https://www.byui.edu/majors/ |
 * | Number of courses | https://catalog.byu.edu/courses | https://catalog.byuh.edu/courses | https://www.byui.edu/catalog#/courses |
 * | Acceptance rate | https://www.byu.edu/admissions | https://www.byuh.edu/admissions-aid | https://www.byui.edu/admissions/application-help/academic-requirements |
 */
export const SCHOOL_INFO: SchoolDataCollection<SchoolInfo> = {
  byu: {
    numberOfStudents: 34937,
    internationStudentRatio: 3.5,
    studentToFaculty: '21:1',
    numberOfMajors: 198,
    numberOfCourses: 5875,
    acceptanceRate: 0.662,
  },
  byuh: {
    numberOfStudents: 2739,
    internationStudentRatio: 64,
    studentToFaculty: '16:1',
    numberOfMajors: 37,
    numberOfCourses: 943,
    acceptanceRate: 0.42,
  },
  byui: {
    numberOfStudents: 22251,
    internationStudentRatio: 17.5,
    studentToFaculty: '21:1',
    numberOfMajors: 144,
    numberOfCourses: 2071,
    acceptanceRate: 0.94,
  },
};
