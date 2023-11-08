module.exports = {
  extends: ["next", "prettier"],
  plugins: ["@typescript-eslint"],
  rules: {
    "prefer-const": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/no-unescaped-entities": 0,
  },
};
