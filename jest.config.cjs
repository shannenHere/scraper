module.exports = {
  testPathIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/tests/**/*.mjs'], // Ensure this matches your file structure
  transform: {
    '^.+\\.mjs$': 'babel-jest',
  },
};
