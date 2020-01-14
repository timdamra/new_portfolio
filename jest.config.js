module.exports = {
  testRegex: '((\\.|/*.)(spec))\\.js?$',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|jpg|png)$': '<rootDir>/src/__mocks__/asset_mock.js'
  }
}
