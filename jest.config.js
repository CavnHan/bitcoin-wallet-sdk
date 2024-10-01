// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: ['<rootDir>/test/fixtures'],
    coveragePathIgnorePatterns: ['<rootDir>/test/'],
    testRegex: 'test/(.+)\\.test\\.(jsx?|tsx?)$',
    setupFilesAfterEnv: ['./jest.setup.js'],
    verbose: true,
    // require: [
    //     "ts-node/register",
    //     "tsconfig-paths/register"
    // ],
    transform: {
        "^.+\\.(t|j)sx?$": "ts-jest"
    }
};