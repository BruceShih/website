import antfu from '@antfu/eslint-config'
import oxlint from 'eslint-plugin-oxlint'

export default antfu({
  formatters: true,
  vue: true,
  stylistic: {
    indent: 2,
    quotes: 'single'
  }
}, {
  rules: {
    'style/comma-dangle': ['error', 'never'],
    'style/max-len': ['error', { code: 140, ignoreStrings: true }],
    'style/multiline-ternary': ['error', 'always-multiline'],
    'style/no-tabs': ['error', { allowIndentationTabs: false }],
    'style/quotes': ['error', 'single']
  }
}).prepend(oxlint.configs['flat/recommended'])
