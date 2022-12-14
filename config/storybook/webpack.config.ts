import path from 'path'

import { Configuration, DefinePlugin, RuleSetRule } from 'webpack'

import { buildCssLoader, buildSvgLoader } from '../build/loaders'
import { BuildPaths } from '../build/types/config'

// Переопределяем конфиг для Storybook
export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),

    // Дополнительные пути для сборки
    locales: '',
    buildLocales: '',
  }

  // Определение абсолютных импортов
  // Важно передавать папку src первой в массив
  config.resolve!.modules!.unshift(paths.src)

  // Определение расширений
  config.resolve!.extensions!.push('.ts', '.tsx')

  // Добавляем alias
  config.resolve!.alias = { ...config.resolve!.alias, '@': path.resolve(__dirname, '..', '..', 'src') }

  // Определение CSS/SCSS Modules
  config.module!.rules!.push(buildCssLoader(true))

  // Переопределение обработки SVG
  // eslint-disable-next-line no-param-reassign
  config.module!.rules = config.module?.rules?.map((rule: RuleSetRule | '...') => {
    if (rule !== '...') {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i }
      }
    }
    return rule
  })

  // Добавляем своюй SVG Loader
  config.module!.rules!.push(buildSvgLoader())

  // Объявляем глобальные перемены
  config.plugins!.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify('https://testapi.ru'),
      __PROJECT__: JSON.stringify('storybook'),
    }),
  )

  return config
}
