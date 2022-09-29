import { lazy } from 'react'

export const AboutAsync = lazy(
  () => new Promise((resolve) => {
    // @ts-ignore
    // Искусственная задержка
    setTimeout(() => resolve(import('./About')), 1500)
  }),
)
