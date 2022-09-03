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

module.exports = {
  getVersion,
};
