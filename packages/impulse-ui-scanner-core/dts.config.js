const banner2 = require('rollup-plugin-banner2');

module.exports = {
  rollup(config) {
    config.plugins.push(banner2(() => "'use client';"));

    return config;
  },
};
