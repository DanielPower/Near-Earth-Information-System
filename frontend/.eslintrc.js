module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'accessible-emoji': 'off',
    'jsx-a11y/alt-text': 'off',
    'anchor-has-content': 'off',
    'anchor-is-valid': 'off',
    'aria-activedescendant-has-tabindex': 'off',
    'react/jsx-props-no-spreading': 'off',
    'aria-props': 'off',
    'react/no-array-index-key': 'off',
    'aria-proptypes': 'off',
    'aria-role': 'off',
    'aria-unsupported-elements': 'off',
    'autocomplete-valid': 'off',
    'click-events-have-key-events': 'off',
    'control-has-associated-label': 'off',
    'heading-has-content': 'off',
    'html-has-lang': 'off',
    'iframe-has-title': 'off',
    'img-redundant-alt': 'off',
    'interactive-supports-focus': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'label-has-associated-control': 'off',
    'label-has-for': 'off',
    'linebreak-style': 'off',
    'media-has-caption': 'off',
    'mouse-events-have-key-events': 'off',
    'no-access-key': 'off',
    'no-autofocus': 'off',
    'no-distracting-elements': 'off',
    'no-interactive-element-to-noninteractive-role': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'no-noninteractive-element-to-interactive-role': 'off',
    'no-noninteractive-tabindex': 'off',
    'no-onchange': 'off',
    'no-redundant-roles': 'off',
    'no-static-element-interactions': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react/prop-types': 'off',
    'role-has-required-aria-props': 'off',
    'role-supports-aria-props': 'off',
    'tabindex-no-positive': 'off',
    lang: 'off',
    scope: 'off',
  },
};
