import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import { Options } from 'tsup';

const pexec = promisify(exec);

export const baseOptions = (options: Options): Options => ({
  ...options,
  entry: ['src/index.ts', ...((options?.entry as string[]) ?? [])],
  format: ['esm'],
  minify: true,
  clean: true,
  banner: {
    js: '"use client"',
  },
  outExtension: () => ({
    js: '.js',
  }),
  external: ['react', 'react-dom', 'styled-components', 'tesseract.js'],
  async onSuccess() {
    try {
      await pexec('tsc --emitDeclarationOnly --declaration');
    } catch (err: any) {
      console.error(err.stdout);
      throw err;
    }
  },
});
