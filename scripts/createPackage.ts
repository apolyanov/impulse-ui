import { cpSync as copy, readFileSync, rmSync as remove, writeFileSync } from 'fs';

const templateDir = './scripts/assets/template-package';
const packageName = process.argv[2];
const packageDir = `./packages/impulse-ui-${packageName}`;
const nameArgRegex = /name-arg/gi;

const copyTemplate = () => {
  const startTime = performance.now();

  console.info('Copying template folder...');
  copy(templateDir, packageDir, { recursive: true });

  console.info('Cleaning node_modules...');
  remove(`${packageDir}/node_modules`, { recursive: true, force: true });

  console.info('Cleaning dist...');
  remove(`${packageDir}/dist`, { recursive: true, force: true });

  console.info('Reading package.json...');
  let packageJson = readFileSync(`${packageDir}/package.json`, 'utf8');

  console.info('Updating package.json...');
  packageJson = packageJson.replace(nameArgRegex, packageName);

  console.log('Saving package.json...');
  writeFileSync(`${packageDir}/package.json`, packageJson);

  const endTime = performance.now();

  console.log(`Creating the package took ${endTime - startTime}ms to complete.`)
};

copyTemplate();
