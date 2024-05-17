import viteBasicSslPlugin from '@vitejs/plugin-basic-ssl';
import ReactPlugin from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ReactPlugin({}), viteBasicSslPlugin()],
  server: {
    fs: {
      allow: ['..'],
    },
  },
});
