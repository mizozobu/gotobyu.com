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
 * | International student ratio | https://www.usnews.com/best-colleges/byu-3670 | https://about.byuh.edu/00000177-1ce4-d89c-af77-7df626210000/20-11-09-quickfactsupdate-pdf | https://www.collegefactual.com/colleges/brigham-young-university-idaho/student-life/international/ |
 * | Student to faculty ratio | https://www.usnews.com/best-colleges/byu-3670 | https://about.byuh.edu/00000177-1ce4-d89c-af77-7df626210000/20-11-09-quickfactsupdate-pdf | https://www.communitycollegereview.com/brigham-young-university-idaho-profile |
 * | Number of majors | https://www.byu.edu/facts-figures | https://holokai.byuh.edu/programs-of-study# | https://www.collegefactual.com/colleges/brigham-young-university-idaho/academic-life/academic-majors/ |
 * | Number of courses | https://catalog.byu.edu/courses | https://catalog.byuh.edu/courses | https://www.byui.edu/catalog#/courses |
 * | Acceptance rate | https://enrollment.byu.edu/admissions/entrance-averages | https://www.usnews.com/best-colleges/brigham-young-university-hawaii-1606 | https://www.byui.edu/admissions/application-help/academic-requirements |
 */
export const SCHOOL_INFO: SchoolDataCollection<SchoolInfo> = {
  byu: {
    numberOfStudents: 36024,
    internationStudentRatio: 4.5,
    studentToFaculty: '20:1',
    numberOfMajors: 186,
    numberOfCourses: 5765,
    acceptanceRate: 0.59,
  },
  byuh: {
    numberOfStudents: 3096,
    internationStudentRatio: 48,
    studentToFaculty: '17:1',
    numberOfMajors: 65,
    numberOfCourses: 935,
    acceptanceRate: 0.45,
  },
  byui: {
    numberOfStudents: 21140,
    internationStudentRatio: 15.5,
    studentToFaculty: '48:1',
    numberOfMajors: 69,
    numberOfCourses: 2090,
    acceptanceRate: 0.96,
  },
};
