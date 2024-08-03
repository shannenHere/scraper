module.exports = {
  testMatch: ["**/tests/**/*.mjs"],
  testPathIgnorePatterns: ["/node_modules/"],
  transform: {
    "^.+\\.mjs$": "babel-jest",
  },
};
