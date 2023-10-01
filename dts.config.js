const postcss = require('rollup-plugin-postcss');
const fontMagician = require('postcss-font-magician');

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
    return config;
  },
};
