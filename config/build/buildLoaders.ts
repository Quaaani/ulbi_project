import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'

import { buildCssLoader, buildSvgLoader } from './loaders'
import { BuildOptions } from './types/config'

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  // CSS и SCSS Лоудер
  const cssLoader = buildCssLoader(isDev)

  // SVG Лоудер
  const svgLoader = buildSvgLoader()

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

  // Babel Лоудер
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  }

  return [fileLoader, svgLoader, babelLoader, typeScriptLoader, cssLoader]
}
