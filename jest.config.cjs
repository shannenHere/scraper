// jest.config.cjs
module.exports = {
  testMatch: ['**/tests/**'],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.mjs$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
  },
};
