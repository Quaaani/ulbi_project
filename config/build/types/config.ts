export type BuildMode = 'production' | 'development'

export interface BuildPaths {
  entry: string
  build: string
  html: string
  src: string
}

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  isDev: boolean
  port: number
  isAnalyze: boolean
  apiUrl: string
}

// Типизация для переменных из окружения
export interface BuildEnv {
  mode: BuildMode
  port: number
  isAnalyze: boolean
  apiUrl: string
}
