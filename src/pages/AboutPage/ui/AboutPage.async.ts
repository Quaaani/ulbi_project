import { lazy } from 'react'

export const AboutAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // Искусственная задержка
      setTimeout(() => resolve(import('./AboutPage')), 1500)
    }),
)
