module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  setupFiles: [
    '<rootDir>/tools/test/shim.js',
    '<rootDir>/tools/test/enzyme.setup.js',
  ],
  testMatch: [
    `<rootDir>/packages/src/**/__tests__/**/*.(ts|tsx)?(x)`,
    `<rootDir>/packages/src/**/?(*.)+(spec|test).(ts|tsx)?(x)`,
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true,
  globals: {
    ENVS: {
      API_DOMAIN: '',
    },
  },
  moduleNameMapper: {
    '^@src(.*)$': `<rootDir>/packages/src$1`,
    '^@app-configs(.*)$': `<rootDir>/packages/src/configs$1`,
    '^@core(.*)$': `<rootDir>/packages/core$1`,
  },
  preset: 'ts-jest',
};
