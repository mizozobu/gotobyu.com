const args = process.argv.slice(2);
if (args.length !== 1) throw new Error('requires only 1 package name');
const pkg = args[0];
const version = new RegExp(`(?<=${pkg}@)(.+)`).exec(
  require('child_process')
    .spawnSync('yarn', ['list', '--pattern', pkg])
    .stdout.toString(),
)[0];

process.stdout.write(version);

// one liner
// node -p "/(?<=@playwright\/test@)(\d+\.\d+\.\d+)/.exec(require('child_process').spawnSync('yarn',['list','--pattern','@playwright/test']).stdout.toString())[0]"
