import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

import { BuildOptions } from './types/config'

export function buildPlugins(
  options: BuildOptions,
): webpack.WebpackPluginInstance[] {
  const { paths, isDev } = options

  return (
    [
      // Сборка HTML файла с подключением скрипта и доп. конфигами
      new HtmlWebpackPlugin({
        // Конфиг для использования нашего index.html в кач-ве шаблона
        template: paths.html,
      }),

      // Таймер сборки
      new webpack.ProgressPlugin(),

      // Плагин для хеширования CSS классов
      !isDev &&
        new MiniCssExtractPlugin({
          filename: 'css/[name].[contenthash:8].css',
          chunkFilename: 'css/[name].[contenthash:8].css',
        }),

      // Плагин для глобальных переменных
      new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(isDev),
      }),

      // Плагин для обновления приложения без обновления страницы
      isDev && new webpack.HotModuleReplacementPlugin(),

      // Похожий плагин для реакт компонентов
      isDev && new ReactRefreshWebpackPlugin(),
    ]
      // Фильтруем массив плагинов, чтобы не попали false (prod сборки)
      .filter(Boolean)
  )
}
