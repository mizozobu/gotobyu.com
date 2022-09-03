const { spawnSync } = require('child_process');

/**
 * Get the installed package version
 * One liner is:
 * ```
 * node -p "/(?<=@playwright\/test@)(\d+\.\d+\.\d+)/.exec(require('child_process').spawnSync('yarn',['list','@playwright/test']).stdout.toString())[0]"
 * ```
 * @param {string} pkg Package name
 * @returns Package version
 */
const getVersion = (pkg) => {
  const [version] = new RegExp(`(?<=${pkg}@)(.+)`).exec(
    spawnSync('yarn', ['list', pkg]).stdout.toString(),
  );

  return version;
};

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
