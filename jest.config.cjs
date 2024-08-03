// jest.config.cjs
module.exports = {
  testMatch: ['**/tests/**/*.?(js|mjs)'], // Matches .js and .mjs files in the tests directory
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.mjs$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
  },
};
