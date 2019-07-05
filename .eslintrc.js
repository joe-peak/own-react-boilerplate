module.exports = {
  // 将 ESLint 限制到一个特定的项目，在配置文件里设置 "root": true
  // ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找
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
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'no-alert': 2,
    semi: 1,
    curly: 2,
    indent: [1, 2],
    quotes: [2, "single"],
  },
  plugins: [
    'react',
    'babel',
  ],
  extends: [
    // 'eslint:recommended',
    // 'plugin:react/recommended'
  ],
  globals: {
    document: false,
    _: false,
  }
};