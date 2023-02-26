module.exports = {
  root: true,
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/strict-boolean-expressions": 0,
  },
  env: {
    browser: true,
    node: true,
  },
};
