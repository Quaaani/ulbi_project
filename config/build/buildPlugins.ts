import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin'

import { BuildOptions } from './types/config'

export function buildPlugins(
  options: BuildOptions,
): webpack.WebpackPluginInstance[] {
  const { paths, isDev, isAnalyze } = options

  const plugins = [
    // Сборка HTML файла с подключением скрипта и доп. конфигами
    new HtmlWebpackPlugin({
      // Конфиг для использования нашего index.html в кач-ве шаблона
      template: paths.html,
    }),

    // Таймер сборки
    new webpack.ProgressPlugin(),

    // Плагин для хеширования CSS классов
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),

    // Плагин для глобальных переменных
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),

    // Плагин для поддержки чувствительности к регистру в названии папок
    new CaseSensitivePathsPlugin(),
  ]

  if (isDev) {
    // Плагин для обновления приложения без обновления страницы
    plugins.push(new webpack.HotModuleReplacementPlugin())

    // Похожий плагин для реакт компонентов
    // overlay: false - убирает отрисовку stack trace в окне браузера
    plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }))
  }

  if (isAnalyze) {
    // Анализ размера чанков
    plugins.push(new BundleAnalyzerPlugin())
  }

  return plugins
}
