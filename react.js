module.exports = {
    plugins: ['react-hooks'],
    extends: ['plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
