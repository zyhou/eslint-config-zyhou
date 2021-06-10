const tests = require('./tests.js');

module.exports = {
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
            extends: ['plugin:import/typescript', 'plugin:@typescript-eslint/recommended'],
            rules: {
                '@typescript-eslint/no-unused-vars': [
                    'error',
                    {
                        ignoreRestSiblings: true,
                        argsIgnorePattern: '^_',
                    },
                ],
            },
        },
        {
            files: ['**/*.{test,spec,stories}.*', '**/test{s,}/**'],
            ...tests,
        },
    ],
};
