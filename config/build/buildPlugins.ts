import webpack from 'webpack'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CircularDependencyPlugin from 'circular-dependency-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import { BuildOptions } from './types/config'

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
  const { paths, isDev, isAnalyze, apiUrl, project } = options

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
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),

    // Плагин для копирования доп сущностей
    new CopyPlugin({
      patterns: [{ from: paths.locales, to: paths.buildLocales }],
    }),

    // Плагин для отслеживания кольцевых зависимостей
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }),

    // Плагин для выноса проверки типов TS в отдельный процесс
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: 'write-references',
      },
    }),
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
