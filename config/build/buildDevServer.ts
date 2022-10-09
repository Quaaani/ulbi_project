import openBrowser from 'react-dev-utils/openBrowser'

import { BuildOptions } from './types/config'

import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  const { port } = options

  return {
    // # Порта для приложения
    port,

    // Позволяет проксировать запросы через index page (корневую страницу)
    historyApiFallback: true,

    // Позволяет обновлять приложение без обновления страницы
    hot: true,

    // Автооткрытие в браузере нашего приложения
    open: true,
  }
}
