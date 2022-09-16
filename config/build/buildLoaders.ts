import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  // CSS и SCSS Лоудер
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // При dev сборке все CSS файлы находятся в JS файле
      // При prod сборке мы выносим все CSS файлы в отдельную папку
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            // Хэшируем только .module.css файлы
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),

            // При dev сборке названия классов будут продуманные для работы
            // При prod сборке названия классов будут хэшированные
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:8]'
              : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };

  // TS Лоудер
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [typeScriptLoader, cssLoader];
}
