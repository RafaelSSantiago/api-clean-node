import type { Config } from 'jest'

const config: Config = {
  roots: ['<rootDir>/src'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/coverage/'
  ],
  clearMocks: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageProvider: 'v8',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}

export default config
