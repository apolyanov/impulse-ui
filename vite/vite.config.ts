import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import viteBasicSslPlugin from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// @ts-ignore
import eruda from 'vite-plugin-eruda';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteBasicSslPlugin(), eruda(), vanillaExtractPlugin()],
});
