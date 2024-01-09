module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: 'airbnb',
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 2],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-trailing-spaces': 'error',
        curly: 'error',
        'brace-style': 'error',
        'no-multi-spaces': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'no-whitespace-before-property': 'error',
        'func-call-spacing': 'error',
        'space-before-blocks': 'error',
        'keyword-spacing': ['error', { before: true, after: true }],
        'comma-spacing': ['error', { before: false, after: true }],
        'comma-style': ['error', 'last'],
        'comma-dangle': ['error', 'always-multiline'],
        'space-in-parens': ['error', 'never'],
        'block-spacing': 'error',
        'array-bracket-spacing': ['error', 'never'],
        'object-curly-spacing': ['error', 'always'],
        'key-spacing': ['error', { mode: 'strict' }],
        'arrow-spacing': ['error', { before: true, after: true }],
    },
};
