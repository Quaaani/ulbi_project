import path from 'path'

import { Configuration, RuleSetRule } from 'webpack'

import { buildCssLoader, buildSvgLoader } from '../build/loaders'
import { BuildPaths } from '../build/types/config'

// Переопределяем конфиг для Storybook
export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  }

  // Определение абсолютных импортов
  config.resolve?.modules?.push(paths.src)

  // Определение расширений
  config.resolve?.extensions?.push('.ts', '.tsx')

  // Определение CSS/SCSS Modules
  config.module?.rules?.push(buildCssLoader(true))

  // Переопределение обработки SVG
  // eslint-disable-next-line no-param-reassign
  config.module!.rules = config.module?.rules?.map(
    (rule: RuleSetRule | '...') => {
      if (rule !== '...') {
        if (/svg/.test(rule.test as string)) {
          return { ...rule, exclude: /\.svg$/i }
        }
      }
      return rule
    },
  )

  // Добавляем своюй SVG Loader
  config.module?.rules?.push(buildSvgLoader())

  return config
}
