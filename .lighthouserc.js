module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      startServerCommand: 'yarn start',
      startServerReadyPattern: 'started server on 0.0.0.0:3000',
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/about',
        'http://localhost:3000/schools/byu',
        'http://localhost:3000/schools/byuh',
        'http://localhost:3000/schools/byui',
        'http://localhost:3000/tips/apply',
        'http://localhost:3000/tips/career',
        'http://localhost:3000/tips/compare',
        'http://localhost:3000/tips/internship',
        'http://localhost:3000/tips/learn-english',
      ],
    },
    assert: {
      // assert options here
    },
    upload: {
      target: 'filesystem',
      outputDir: '.lighthouseci',
    },
    server: {
      // server options here
    },
    wizard: {
      // wizard options here
    },
  },
};
