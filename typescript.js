const tests = require('./tests.js');

module.exports = {
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
            extends: ['plugin:import/typescript', 'plugin:@typescript-eslint/recommended'],
        },
        {
            files: ['**/*.{test,spec,stories}.*', '**/test{s,}/**'],
            ...tests,
        },
    ],
};
