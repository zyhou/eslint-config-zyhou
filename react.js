module.exports = {
    extends: ['plugin:react/recommended', 'plugin:jsx-a11y/recommended', 'plugin:testing-library/react'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    overrides: [
        {
            files: ['*.jsx', '*.tsx'],
            rules: {
                'react/prop-types': 'off', // We expect React components to be checked by TypeScript
            },
        },
    ],
};
