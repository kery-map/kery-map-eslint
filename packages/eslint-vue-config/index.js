module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: ['plugin:vue/recommended'],
  rules: {
    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      ignores: [],
    }],
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'never',
        component: 'never',
      },
      svg: 'always',
      math: 'always',
    }],
  },
};
