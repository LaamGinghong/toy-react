module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['build', 'update', 'fix', 'revert']],
    'subject-case': [0],
  },
}
