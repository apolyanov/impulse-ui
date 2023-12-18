const { readdir: readFolder, rm: removeFolder } = require('fs');

const PACKAGES_ROOT = './packages';
const NODE_MODULES = 'node_modules';
const DIST = 'dist';

const removeOptions = {
  recursive: true,
  force: true,
};

const removedFolderCallback = (folder, folderType, error) => {
  if (error) {
    console.error(error.message);
    return;
  }

  console.info(`${folder} cleaned successfully from ${folderType}.`);
};

const cleanNodeModules = () => {
  readFolder(PACKAGES_ROOT, (err, files) => {
    if (err) {
      console.error(err.message);
      return;
    }

    files.forEach((folder) => {
      removeFolder(`${PACKAGES_ROOT}/${folder}/${NODE_MODULES}`, removeOptions, (err) =>
        removedFolderCallback(folder, NODE_MODULES, err),
      );
      removeFolder(`${PACKAGES_ROOT}/${folder}/${DIST}`, removeOptions, (err) =>
        removedFolderCallback(folder, DIST, err),
      );
    });
  });
};

cleanNodeModules();
