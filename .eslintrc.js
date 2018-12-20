module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/strongly-recommended', 
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
  },
}
