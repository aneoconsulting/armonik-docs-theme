import antfu from '@antfu/eslint-config'

export default antfu().prepend({
  rules: {
    'yml/no-empty-mapping-value': 'off',
  },
})
