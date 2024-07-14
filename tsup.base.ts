import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import { Options } from 'tsup';

const pexec = promisify(exec);

export const baseOptions: Options = {
  entry: ['src/**/*@(ts|tsx)'],
  format: ['esm'],
  clean: true,
  banner: {
    js: '"use client"',
  },
  outExtension: () => ({
    js: '.js',
  }),
  async onSuccess() {
    try {
      await pexec('tsc --emitDeclarationOnly --declaration');
    } catch (err) {
      console.error(err.stdout);
      throw err;
    }
  },
};
