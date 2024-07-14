import { defineConfig } from 'tsup';
import { baseOptions } from '../../tsup.base';

export default defineConfig({
  injectStyle: true,
  external: ['lodash-es'],
  ...baseOptions,
});
