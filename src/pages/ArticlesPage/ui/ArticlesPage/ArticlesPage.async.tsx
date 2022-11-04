import { lazy } from 'react'

export const ArticlesAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // Искусственная задержка
      setTimeout(() => resolve(import('./ArticlesPage')), 1500)
    }),
)
