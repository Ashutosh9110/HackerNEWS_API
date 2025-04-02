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
  },
  // Specify test file patterns
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)"
  ],
  // Set the test environment
  testEnvironment: "jsdom",
  // Collect coverage from all source files
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts"
  ]
}; 