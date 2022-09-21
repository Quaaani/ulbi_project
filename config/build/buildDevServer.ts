import { BuildOptions } from './types/config';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    // # Порта для приложения
    port: options.port,

    // Автооткрытие в браузере нашего приложения
    open: true,

    // Позволяет проксировать запросы через index page (корневую страницу)
    historyApiFallback: true,

    // Позволяет обновлять приложение без обновления страницы
    hot: true,
  }
}
