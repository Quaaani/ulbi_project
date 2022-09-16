import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';

export function buildWepbackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode, isDev } = options;

  return {
    // Вид сборки
    mode,

    // Стартовая точка нашего приложения
    entry: paths.entry,

    // Куда мы будем делать сборку
    output: {
      // Хэшируем название файла и его содержимое через два шаблона
      filename: '[name].[contenthash].js',

      // Путь до папки, которая будет создавать для сборки
      path: paths.build,

      // Автоудаление ненужных файлов
      clean: true,
    },

    // Плагины
    plugins: buildPlugins(options),

    // ТС конфиг
    module: {
      // Лоудеры, которые обрабатывают файлы за рамками js
      rules: buildLoaders(options),
    },

    // Резолверы
    resolve: buildResolvers(),

    // Трассировка стека
    devtool: isDev ? 'inline-source-map' : undefined,

    // Автозапуск сборки при любых изменениях
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
