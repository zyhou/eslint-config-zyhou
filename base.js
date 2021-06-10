const tests = require('./tests.js');

module.exports = {
    env: {
        node: true,
        browser: true,
        es2020: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        requireConfigFile: false,
    },
    plugins: ['babel'],
    extends: ['eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings'],
    rules: {
        'no-console': [
            'error',
            {
                allow: ['warn', 'error'],
            },
        ],
        'no-unused-vars': [
            'error',
            {
                ignoreRestSiblings: true,
                argsIgnorePattern: '^_',
            },
        ],
        'no-irregular-whitespace': [
            'error',
            {
                skipStrings: true,
                skipComments: false,
                skipRegExps: true,
                skipTemplates: true,
            },
        ],
        'babel/no-unused-expressions': 'error',
    },
    overrides: [
        {
            files: ['**/*.{test,spec,stories}.*', '**/test{s,}/**'],
            ...tests,
        },
    ],
};
