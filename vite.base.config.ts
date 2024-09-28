import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const serverSafePackages = ["toolkit", "colours"];

const capitalize = (str: string) =>
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

export const baseConfig = (name: string) => {
  const external = [
    "react",
    "react-dom",
    "styled-components",
    "@fortawesome/fontawesome-svg-core/styles.css",
    /^@fontsource\/montserrat\/?.*$/,
    /@impulse-ui\/(.*)/,
  ];

  return defineConfig({
    publicDir: "./public",
    build: {
      lib: {
        entry: "./src/index.ts",
        name: `impulse${capitalize(name)}`,
        fileName: (format) => `${name}.${format}.js`,
      },
      outDir: "./dist",
      rollupOptions: {
        external,
        output: {
          banner: () => {
            if (!serverSafePackages.includes(name)) return "'use client'";
          },
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "styled-components": "styled",
            "@impulse-ui/auto-complete": "impulseAutoComplete",
            "@impulse-ui/avatar": "impulseAvatar",
            "@impulse-ui/buttons": "impulseButtons",
            "@impulse-ui/colours": "impulseColours",
            "@impulse-ui/core": "impulseCore",
            "@impulse-ui/icon": "impulseIcon",
            "@impulse-ui/layout": "impulseLayout",
            "@impulse-ui/input": "impulseInput",
            "@impulse-ui/loader": "impulseLoader",
            "@impulse-ui/qr": "impulseQr",
            "@impulse-ui/ocr": "impulseOcr",
            "@impulse-ui/scanner-core": "impulseScannerCore",
            "@impulse-ui/navigation": "impulseNavigation",
            "@impulse-ui/table": "impulseTable",
            "@impulse-ui/text": "impulseText",
          },
        },
      },
      sourcemap: true,
      emptyOutDir: true,
    },
    plugins: [dts()],
  });
};
