module.exports = {
  collectCoverageFrom: ["app/javascript/"],
  coverageProvider: "v8",
  moduleDirectories: [
    "node_modules",
    "app/javascript",
    "test/javascript/support",
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|svg?|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/javascript/__mocks__/fileMock.js",
  },
  roots: ["<rootDir>/app/javascript/", "<rootDir>/test/javascript/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
}
