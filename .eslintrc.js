module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'no-alert': 2,
    semi: 1,
    curly: 2,
    indent: [1, 2],
    quotes: [2, "single"],
  },
  plugins: [
    'react',
  ],
  extends: [
    'plugin:react/recommended'
  ],
  globals: {
    document: false
  }
};