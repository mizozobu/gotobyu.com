const { getVersion } = require('./lib/get-version');

const args = process.argv.slice(2);
if (args.length !== 1) throw new Error('requires only 1 package name');
const [pkg] = args;
process.stdout.write(getVersion(pkg));
