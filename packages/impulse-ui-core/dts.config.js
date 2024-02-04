const postcss = require('rollup-plugin-postcss');
const fontMagician = require('postcss-font-magician');
const banner2 = require('rollup-plugin-banner2');

module.exports = {
  rollup(config) {
    config.plugins.unshift(
      postcss({
        plugins: [
          fontMagician({
            variants: {
              Poppins: {
                100: [],
                200: [],
                300: [],
                400: [],
                500: [],
                600: [],
                700: [],
                800: [],
                900: [],
              },
            },
            foundries: ['google'],
          }),
        ],
      }),
    );

    config.plugins.push(banner2(() => "'use client';"));

    return config;
  },
};
