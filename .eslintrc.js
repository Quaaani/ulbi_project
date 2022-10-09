module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'i18next', 'import'],
  rules: {
    // Табуляция
    indent: [2, 2],

    // Табуляция для JSX
    'react/jsx-indent': [2, 2],

    // Табуляция для пропсов
    'react/jsx-indent-props': [2, 2],

    // Использование абсолютных путей
    'import/no-unresolved': 'off',

    // Использование дефолтного экспорта
    'import/prefer-default-export': 'off',

    // Какие расширения можно не писать
    'import/extensions': 'off',

    // Разрешает импортировать devDependencies
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

    // Расширения файлов
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],

    // Отсутствие дефолтного значения
    'react/require-default-props': 'off',

    // Необходимость импорта React
    'react/react-in-jsx-scope': 'off',

    // Использования spread для пропсов
    'react/jsx-props-no-spreading': 'off',

    // Ипользование Func Dec вместо Arrow Func
    'react/function-component-definition': 'off',

    // Неиспользованные переменные
    'no-unused-vars': 'off',

    // Использование одинаковых названия для переменных в разных обл видимости
    'no-shadow': 'off',

    // Использование ковычек для ключей объекта
    'quote-props': ['error', 'as-needed'],

    // Использование нижнего подчеркивания
    'no-underscore-dangle': 'off',

    // Плагин i18 будет работать только в tsx/jsx файлах
    'i18next/no-literal-string': [
      'error',
      { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] },
    ],

    // Максимальная длинна строки
    'max-len': ['error', { code: 120, ignoreComments: true }],

    // Использование точки с запятой
    semi: ['error', 'never'],

    // Использование console.log
    'no-console': ['error', { allow: ['warn', 'error'] }],

    // Сортировка импортов
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
      },
    ],
  },
  // Для объявления глобальных переменных
  globals: {
    __IS_DEV__: true,
  },

  // Позволяет переписать правила для определенных типов файла
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
}