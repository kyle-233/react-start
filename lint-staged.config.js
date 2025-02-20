/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */

export default {
  'src/**/*.{ts,tsx}': ['eslint --cache'],
  'src/**/*.{js,jsx}': ['eslint --cache'],
}
