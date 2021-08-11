export const CostData = {
  // https://enrollment.byu.edu/financial-aid/cost-of-attendance
  byu: {
    tuition: 5970 / 2,
    housing: 7808 / 2,
    books: 896 / 2,
    personal: 2408 / 2,
    transportation: 2512 / 2,
    loan: 60 / 2,
  },
  // https://financialaid.byuh.edu/cost-of-attendance
  byuh: {
    tuition: 8091 / 3,
    housing: 10517 / 3,
    books: 1965 / 3,
    personal: 1890 / 3,
    transportation: 450 / 3,
    loan: 0 / 2,
  },
  // https://www.byui.edu/financial-aid/cost-of-attendance
  byui: {
    tuition: 2150,
    housing: 2184,
    books: 200,
    personal: 1192,
    transportation: 630,
    loan: 0 / 2,
  },
};

export const TuitionData = {
  byu: CostData.byu.tuition * 2, // 2 semsters
  byuh: CostData.byuh.tuition * 3, // 3 semsters
  byui: CostData.byui.tuition * 2, // 2 semsters
  jpKokuritsu: 535800 / 110, // https://www.mext.go.jp/a_menu/koutou/shinkou/07021403/__icsFiles/afieldfile/2017/12/26/1399613_03.pdf
  jpShiritsu: 877735 / 110, // https://www.mext.go.jp/a_menu/koutou/shinkou/07021403/__icsFiles/afieldfile/2017/12/26/1399613_03.pdf
  usPublic: 21184, // https://nces.ed.gov/fastfacts/display.asp?id=76
  usPrivate: 35087, // https://nces.ed.gov/fastfacts/display.asp?id=76
};
