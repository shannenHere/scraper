module.exports = {
  testMatch: ['**/tests/**/*.mjs'],
  transform: {
    '^.+\\.mjs$': 'babel-jest',
  },
};
