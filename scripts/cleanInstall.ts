import { readdir, rm } from 'node:fs';

const TURBO_ROOT = './.turbo';
const TURBO_CACHE = 'cache';
const PACKAGES_ROOT = './packages';
const NODE_MODULES = 'node_modules';
const DIST = 'dist';

const removeOptions = {
  recursive: true,
  force: true,
};

const removedFolderCallback = (folder: string, folderType: string, error: NodeJS.ErrnoException | null) => {
  if (error) {
    console.error(error.message);
    return;
  }

  console.info(`${folder} cleaned successfully from ${folderType}.`);
};

const cleanNodeModules = () => {
  rm(`${TURBO_ROOT}/${TURBO_CACHE}`, removeOptions, () => console.info('Cleaned packages cache!'));

  readdir(PACKAGES_ROOT, (err, files) => {
    if (err) {
      console.error(err.message);
      return;
    }

    files.forEach((folder) => {
      rm(`${PACKAGES_ROOT}/${folder}/${NODE_MODULES}`, removeOptions, (err) =>
        removedFolderCallback(folder, NODE_MODULES, err),
      );
      rm(`${PACKAGES_ROOT}/${folder}/${DIST}`, removeOptions, (err) => removedFolderCallback(folder, DIST, err));
    });
  });
};

cleanNodeModules();
