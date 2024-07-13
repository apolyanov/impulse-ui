import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*@(ts|tsx)'],
  format: ['esm'],
  dts: true,
  clean: true,
  injectStyle: true,
  banner: {
    js: '"use client"',
  },
});
