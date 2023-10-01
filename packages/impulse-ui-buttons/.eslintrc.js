module.exports = {
  extends: [
    '../.././node_modules\\dts-cli\\conf\\eslint-config-react-app\\index.js',
    '../.././node_modules\\eslint-config-prettier\\index.js',
    'plugin:prettier/recommended',
  ],
  plugins: ['simple-import-sort', 'react-hooks'],
  rules: {
    camelcase: 'error',
    'spaced-comment': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react', '^@?\\w'],
          ['^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)'],
          ['^\\u0000'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^.+\\u0000$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
