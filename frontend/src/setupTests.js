// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock axios
jest.mock('axios', () => ({
  get: jest.fn()
}));

// Completely suppress console errors during tests to make output cleaner
const originalError = console.error;
beforeAll(() => {
  console.error = jest.fn();
});

afterAll(() => {
  console.error = originalError;
});

// Clear all mocks automatically between tests
beforeEach(() => {
  jest.clearAllMocks();
});
