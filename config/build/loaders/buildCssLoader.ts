import MiniCssExtractPlugin from "mini-css-extract-plugin"

export const buildCssLoader = (isDev: boolean) => ({
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
})
