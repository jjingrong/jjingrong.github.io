module.exports = {
    root: true,
    extends: '@react-native-community',
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'simple-import-sort'],
    rules: {
        'simple-import-sort/sort': 'error',
        // This rule has issues with the TypeScript parser, but tsc catches
        // these sorts of errors anyway.
        // See: https://github.com/typescript-eslint/typescript-eslint/issues/342
        'no-undef': 'off',
    },
};