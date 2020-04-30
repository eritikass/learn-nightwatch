module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "func-names": "off",
    "no-unused-expressions": "off",
    "quotes": "off",
    "devDependencies": "off",
    "max-len": "off",
  },
};
