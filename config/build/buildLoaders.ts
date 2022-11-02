import webpack from 'webpack'

import { buildBabelLoader, buildCssLoader, buildSvgLoader } from './loaders'
import { BuildOptions } from './types/config'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options

  // CSS и SCSS Лоудер
  const cssLoader = buildCssLoader(isDev)

  // SVG Лоудер
  const svgLoader = buildSvgLoader()

  // Babel Лоудер
  const babelLoader = buildBabelLoader(isDev)

  // Files Лоудер
  // Можно добавить расширения для шрифтов (woff2|woff)
  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  // TS Лоудер
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [fileLoader, svgLoader, babelLoader, typeScriptLoader, cssLoader]
}
