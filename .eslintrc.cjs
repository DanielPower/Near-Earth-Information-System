module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    es2021: true,
    node: true,
    mocha: true,
  },
  plugins: ["mocha"],
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  rules: {
    "linebreak-style": ["error", "unix"],
    "mocha/no-exclusive-tests": "error",
    "mocha/no-skipped-tests": "error",
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
