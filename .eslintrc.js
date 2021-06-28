const eslintConfig = require("@keeex/eslint-config");
module.exports = eslintConfig(
  {
    base: true,
    promise: true,
    jsx: true,
  },
  {
    env: {
      mocha: true,
      es6: true,
      node: true,
    },
    rules: {},
  },
);
