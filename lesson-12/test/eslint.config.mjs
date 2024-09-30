import globals from "globals";
import pluginJs from "@eslint/js";
import stylisticJs from '@stylistic/eslint-plugin-js'


export default [
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: { globals: globals.node }
  },
  {
    ignores: ["lesson-10/*.js"]
  },
  pluginJs.configs.recommended,
  {plugins: {
    '@stylistic/js': stylisticJs
  }},
  {rules: {
    '@stylistic/js/semi-spacing': "error",
    '@stylistic/js/space-in-parens': ["error", "never"],
    'no-unused-vars': 'off',
    'no-prototype-builtins': 'off',
    'no-constant-binary-expression': 'off',
    '@stylistic/js/indent': ['error', 4],
    '@stylistic/js/comma-spacing': 'error'
  }}
];