import js from '@eslint/js'
import globals from 'globals'

export default [
    { ignores: ['node_modules'] },
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.node
            }
        },
        rules: {
            'indent': ['error', 4],
            'max-len': ['error', { 'code': 125, 'tabWidth': 4 }],
            'linebreak-style': ['error', 'unix'],
            'quotes': ['error', 'single'],
            'semi': ['error', 'never'],
            'no-duplicate-imports': 'warn',
            'no-unused-private-class-members': 'warn',
            'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
            'curly': ['error', 'multi-or-nest'],
            'func-names': 0,
            'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }]
        }
    }
]
