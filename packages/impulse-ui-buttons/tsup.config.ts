import { defineConfig } from 'tsup';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const pexec = promisify(exec);
export default defineConfig({
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
});
