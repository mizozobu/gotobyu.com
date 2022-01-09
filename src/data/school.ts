/**
 * generic type for data collection for each school
 */
export interface SchoolDataCollection<T> {
  byu: T;
  byuh: T;
  byui: T;
}

/**
 * type for school info
 */
export interface SchoolInfo {
  numberOfStudents: number;
  numberOfInternationStudents: number;
  studentToFaculty: string;
  numberOfMajors: number;
  numberOfCourses: number;
  acceptanceRate: number;
}

/**
 * school info
 */
export const SCHOOL_INFO: SchoolDataCollection<SchoolInfo> = {
  byu: {
    /**
     * see https://www.byu.edu/facts-figures
     */
    numberOfStudents: 36024,
    /**
     * see https://www.byu.edu/facts-figures
     */
    numberOfInternationStudents: 4.5,
    /**
     * see https://www.usnews.com/best-colleges/byu-3670
     */
    studentToFaculty: '20:1',
    /**
     * see https://www.byu.edu/facts-figures
     */
    numberOfMajors: 186,
    /**
     * see https://catalog.byu.edu/courses
     */
    numberOfCourses: 5765,
    /**
     * see https://enrollment.byu.edu/admissions/entrance-averages
     */
    acceptanceRate: 0.59,
  },
  byuh: {
    /**
     * see https://about.byuh.edu/00000177-1ce4-d89c-af77-7df626210000/20-11-09-quickfactsupdate-pdf
     */
    numberOfStudents: 3096,
    /**
     * see https://about.byuh.edu/00000177-1ce4-d89c-af77-7df626210000/20-11-09-quickfactsupdate-pdf
     */
    numberOfInternationStudents: 48,
    /**
     * see https://about.byuh.edu/00000177-1ce4-d89c-af77-7df626210000/20-11-09-quickfactsupdate-pdf
     */
    studentToFaculty: '17:1',
    /**
     * see https://holokai.byuh.edu/programs-of-study#
     */
    numberOfMajors: 65,
    /**
     * see https://catalog.byuh.edu/courses
     */
    numberOfCourses: 935,
    /**
     * see https://www.usnews.com/best-colleges/brigham-young-university-hawaii-1606
     */
    acceptanceRate: 0.45,
  },
  byui: {
    /**
     * see https://www.byui.edu/executive-strategy-and-planning/institutional-data/official-enrollment-statistics
     */
    numberOfStudents: 21140,
    /**
     * see https://www.collegefactual.com/colleges/brigham-young-university-idaho/student-life/international/
     */
    numberOfInternationStudents: 15.5,
    /**
     * see https://www.communitycollegereview.com/brigham-young-university-idaho-profile
     */
    studentToFaculty: '48:1',
    /**
     * see https://www.collegefactual.com/colleges/brigham-young-university-idaho/academic-life/academic-majors/
     */
    numberOfMajors: 69,
    /**
     * see https://www.byui.edu/catalog#/courses
     */
    numberOfCourses: 2090,
    /**
     * see https://www.byui.edu/admissions/application-help/academic-requirements
     */
    acceptanceRate: 0.96,
  },
};
