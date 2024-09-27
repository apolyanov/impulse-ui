import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { ExternalOption } from "rollup";

export const baseConfig = (name: string, externalPackages?: ExternalOption) => {
  let external = [
    "react",
    "react-dom",
    "styled-components",
    /^@fontsource\/montserrat\/?.*$/,
  ];

  if (Array.isArray(externalPackages)) {
    external = [...external, ...externalPackages];
  }

  return defineConfig({
    publicDir: "./public",
    build: {
      lib: {
        entry: "./src/index.ts",
        name: name,
        fileName: (format) => `index.${format}.js`,
      },
      rollupOptions: {
        external,
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "styled-components": "styled",
          },
        },
      },
      sourcemap: true,
      emptyOutDir: true,
    },
    plugins: [dts()],
  });
};