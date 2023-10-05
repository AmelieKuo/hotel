module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['~', './'],
        ],
        extensions: ['.js', '.vue'],
      },
    },
    // 告訴 ESLint 這些套件是安裝在 devDependencies
    'import/core-modules': [
      'vite',
      '@vitejs/plugin-vue',
      'UnoCSS',
    ],
  },
  rules: {
    'import/no-unresolved': ['error', { ignore: ['^virtual:'] }],
    'import/prefer-default-export': 'off',
    'vue/multi-word-component-names': [0],
    'max-len': [0],
    'no-plusplus': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [0],
    'no-console': 'off',
    camelcase: 'off',
    'linebreak-style': ['off', 'windows'],
  },
};
