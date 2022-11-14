module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "array-bracket-spacing": ["error", "never"],
    curly: "off",
    "no-console": "off",
    "no-sparse-arrays": "off",
    "object-curly-spacing": ["error", "always"],
    "object-shorthand": ["error", "always"],
    "@typescript-eslint/ban-types": ["error", { types: { "{}": false } }],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": 2,
    "@typescript-eslint/no-unnecessary-type-assertion": 2,
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
  },
};
