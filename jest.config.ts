import type { Config } from 'jest'
import nextJest from 'next/jest'

const config: Config = {
  clearMocks: true,
  moduleNameMapper: {
    '^@DS/(.*)$': '<rootDir>/@design-system/$1',
    '^@app/(.*)$': '<rootDir>/app/$1',
    '^@search/(.*)$': '<rootDir>/@search_results/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
}

export default nextJest({ dir: './' })(config)
