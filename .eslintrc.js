module.exports = {
  extends: ["next", "prettier", "plugin:storybook/recommended"],
  plugins: ["@typescript-eslint"],
  rules: {
    "prefer-const": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/no-unescaped-entities": 0,
  },
};
