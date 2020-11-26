module.exports = {
    'parser': '@typescript-eslint/parser',
    'plugins': [
        '@typescript-eslint',
        'import'
    ],
    'env': {
        'jest': true,
        'browser': true,
        'node': true,
        'es6': true,
        'mocha': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
        'DocumentTouch': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'rules': {
        '@typescript-eslint/consistent-type-assertions': ['off'],
        '@typescript-eslint/indent': [
            'error',
            4
        ],
        '@typescript-eslint/no-unused-expressions': ['off'],
        '@typescript-eslint/no-non-null-assertion': ['off'],
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                'multiline': {
                    'delimiter': 'none'
                }
            }
        ],
        '@typescript-eslint/ban-types': ['off'],
        'semi': 'off',
        'comma-dangle': ['error', {
            'arrays': 'never',
            'objects': 'never',
            'imports': 'never',
            'exports': 'never',
            'functions': 'never'
        }],
        'prefer-arrow-callback': ['off'],
        'func-names': ['off'],
        'import/extensions': ['error', {
            'js': 'never'
        }],
        'import/no-cycle': ['off'],
        'import/prefer-default-export': ['off'],
        'max-len': ['error', {
            code: 140
        }],
        'arrow-parens': ['off'],
        'no-lonely-if': ['off'],
        'no-plusplus': ['off'],
        'no-unused-expressions': ['off'],
        'no-mixed-operators': ['off'],
        'no-nested-ternary': ['off'],
        'no-restricted-properties': ['off'],
        'no-param-reassign': ['off']
    }
}
