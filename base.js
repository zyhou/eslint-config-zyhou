const tests = require('./tests.js');

module.exports = {
    env: {
        node: true,
        browser: true,
        es2021: true,
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        requireConfigFile: false,
    },
    plugins: ['@babel'],
    extends: ['eslint:recommended', 'plugin:unicorn/recommended', 'plugin:import/errors', 'plugin:import/warnings'],
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
        'unicorn/prefer-module': 'off',
        '@babel/new-cap': 'error',
        '@babel/no-invalid-this': 'error',
        '@babel/no-unused-expressions': 'error',
        '@babel/object-curly-spacing': 'error',
        '@babel/semi': 'error',
    },
    overrides: [
        {
            files: ['**/*.{test,spec,stories}.*', '**/test{s,}/**'],
            ...tests,
        },
    ],
};
