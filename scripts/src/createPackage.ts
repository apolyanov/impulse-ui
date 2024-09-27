import { cpSync as copy, readFileSync, rmSync as remove, writeFileSync } from 'node:fs';

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

  updateTsConfig();

  console.log(`Creating the package took ${endTime - startTime}ms to complete.`);
};

const updateTsConfig = () => {
  const startTime = performance.now();

  console.log('Reading root tsconfig.json...');
  const tsConfig = JSON.parse(readFileSync('./tsconfig.json', 'utf8'));

  console.log('Updating tsconfig.json...');
  tsConfig.references.push({
    path: `./packages/impulse-ui-${packageName}`,
  });

  console.log('Saving tsconfig.json...');
  writeFileSync('./tsconfig.json', JSON.stringify(tsConfig, null, 2));

  const endTime = performance.now();

  console.log(`Updating tsconfig.json took ${endTime - startTime}ms to complete.`);
};

copyTemplate();
