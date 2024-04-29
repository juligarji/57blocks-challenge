const config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    // '\\.(css|less|sass|scss)$': '<rootDir>/test/styleMock.js', // Mock CSS imports (optional)
    '\\.(css|less|sass|scss)$': 'babel-jest', // Mock CSS imports (optional)
  },
  // setupFilesAfterEnv: ['<rootDir>/test/setup.ts'], // Optional setup file
};

export default config;