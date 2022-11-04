import { lazy } from 'react'

export const ArticleDetailsAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // Искусственная задержка
      setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500)
    }),
)
