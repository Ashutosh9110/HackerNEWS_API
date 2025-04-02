module.exports = {
  // Transform all modules except for those you don't want transformed
  transformIgnorePatterns: [
    '/node_modules/(?!axios)/'
  ],
  // Mock axios in all tests
  setupFiles: [
    '<rootDir>/src/setupTests.js'
  ],
  // Allow using ES modules
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  }
}; 