
module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testURL: 'http://localhost',
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
  ],
  modulePaths: [
    '<rootDir>/src',
  ],
  coverageThreshold: {
    '**/*.@(js|jsx)': {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
  ],
};
