import { lazy } from 'react'

export const ArticleEditPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // Искусственная задержка
      setTimeout(() => resolve(import('./ArticleEditPage')), 1500)
    }),
)
