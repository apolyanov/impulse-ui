import { defineConfig } from 'tsup';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const pexec = promisify(exec);
export default defineConfig({
  entry: ['src/**/*@(ts|tsx)'],
  format: ['esm'],
  dts: false,
  clean: true,
  banner: {
    js: '"use client"',
  },
});
