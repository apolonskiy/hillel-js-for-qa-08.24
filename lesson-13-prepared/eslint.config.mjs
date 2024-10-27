import globals from 'globals';
import pluginJs from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js'
import jest from 'eslint-plugin-jest'


export default [
    {
        files: ["**/*.{js|mjs}"],
    },
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: globals.node,
        },
    },
    pluginJs.configs.recommended,
    jest.configs['flat/recommended'],
    {
        plugins: {
            '@stylistic/js': stylisticJs,
        }
    },
    {
        rules: {
            "no-unused-vars": "error",
            "no-console": "off",
            "no-prototype-builtins": 0,
            "@stylistic/js/indent": [
                "error",
                4,
                { "SwitchCase": 1 }
            ],
            "space-in-parens": ["error", "never"]
        }
    },
    {
        ignores: ["data/**"]
    }
];
