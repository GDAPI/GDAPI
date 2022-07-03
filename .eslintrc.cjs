module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    mocha: true,
    jasmine: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'quote-props': ['error', 'consistent']
  }
}
