const { execSync } = require('child_process');

try {
  // 检查pnpm是否安装
  const pnpmVersion = execSync('pnpm --version').toString().trim();
  console.log(`pnpm is installed. Version: ${pnpmVersion}`);

  // todo
  // const pnpmVersion = execSync('pnpm --version').toString().trim();
  // console.log(`pnpm is installed. Version: ${pnpmVersion}`);

  // 检查rimraf是否存在于node_modules/.bin中
  // const rimrafExists = execSync('ls node_modules/.bin | grep rimraf', { encoding: 'utf8' }).includes('rimraf');
  // console.log(`rimraf exists: ${rimrafExists}`);
} catch (error) {
  console.error(`${error.message} One or both tools may not be installed.`);
}
