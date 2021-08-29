module.exports = {
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest-dom/recommended',
    'prettier'
  ],
  plugins: ['react', 'import', 'jsx-a11y', 'jest-dom', 'testing-library'],
  rules: {
    'no-console': 1,
    'no-unused-vars': 1,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        // may need to rename to NextLink depending on usage
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ]
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react']
    }
  ],
  env: {
    jest: true,
    es6: true,
    browser: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  }
};
