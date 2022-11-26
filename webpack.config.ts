import path from 'path'

import webpack from 'webpack'

import { buildWepbackConfig } from './config/build/buildWebpackConfig'
import { BuildEnv, BuildPaths } from './config/build/types/config'

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),

    // Дополнительные пути для сборки
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
  }

  const mode = env.mode || 'development'
  const PORT = env.port || 3000
  const isDev = mode === 'development'
  const isAnalyze = env.isAnalyze || false
  const apiUrl = env.apiUrl || 'http://localhost:8000'

  const config: webpack.Configuration = buildWepbackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    isAnalyze,
    apiUrl,
    project: 'frontend',
  })

  return config
}
