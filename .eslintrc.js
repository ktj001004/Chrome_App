module.exports = {
  root: true,
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/strict-boolean-expressions": [
      2,
      {
        allowString: false,
        allowNumber: false,
      },
    ],
  },
};
