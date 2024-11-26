module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/setupTests.mjs'], // Ensure Jest uses your setup file
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1',  // Map @ to the root directory
    },
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest', // Handle TypeScript files
    },
    testPathIgnorePatterns: ['/node_modules/', '/dist/'], // Ignore unnecessary folders
  };
  