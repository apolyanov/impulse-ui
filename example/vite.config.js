import viteBasicSslPlugin from '@vitejs/plugin-basic-ssl';
import ReactPlugin from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eruda from 'vite-plugin-eruda';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ReactPlugin({}), viteBasicSslPlugin(), eruda()],
  server: {
    fs: {
      allow: ['..'],
    },
  },
});
