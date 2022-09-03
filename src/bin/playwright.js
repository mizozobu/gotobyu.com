const { spawnSync } = require('child_process');
const { getVersion } = require('./lib/get-version');

/**
 * Run Playwright test in docker
 * @param {string} playwightArgs Args for Playwright
 */
const execPlaywrightInDocker = (playwightArgs) => {
  const playwrightVersion = getVersion('@playwright/test');
  spawnSync(
    'docker',
    [
      'run',
      '--rm',
      '--network',
      'host',
      '-v',
      '$(pwd):/work/',
      '-w',
      '/work/',
      // '-it',
      `mcr.microsoft.com/playwright:v${playwrightVersion}-focal`,
      '/bin/bash',
      '-c',
      `"yarn e2e ${playwightArgs}"`,
    ],
    { stdio: 'inherit', shell: '/bin/bash' },
  );
};

const args = process.argv.slice(2);
execPlaywrightInDocker(args.join(' '));
