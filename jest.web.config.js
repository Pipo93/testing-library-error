module.exports = {
    preset: 'jest-expo/web',
    // see https://docs.expo.io/versions/latest/guides/testing-with-jest/#jest-configuration
    transformIgnorePatterns: [
        'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)',
    ],
    transform: {
        '^.+.m?js$': 'babel-jest',
    },
    testMatch: [
        '**/*.spec.(tsx|ts)',
    ],
    coverageReporters: ['text'],
    collectCoverageFrom: [
        'src/**/*.(ts|tsx)',
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
        },
    },
    moduleNameMapper: {
        '^react-native-linear-gradient$': 'react-native-web-linear-gradient',
    },
}
