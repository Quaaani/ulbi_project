import { ResolveOptions } from 'webpack'

import { BuildOptions } from './types/config'

export function buildResolvers({ paths }: BuildOptions): ResolveOptions {
  return {
    // Файлы для которых мы не будем указывать расширение при импортах
    extensions: ['.tsx', '.ts', '.js'],

    // Абсолютные пути в приоритете
    preferAbsolute: true,

    // Путь до папки от которой считается абсолютный путь
    modules: [paths.src, 'node_modules'],

    // Главный файл модуля
    mainFiles: ['index'],

    // Alias (часто указывают с помощью @)
    alias: {},
  }
}
