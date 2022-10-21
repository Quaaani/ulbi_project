import { FC, lazy } from 'react'

import { ProfileProps } from './Profile'

export const ProfileAsync = lazy<FC<ProfileProps>>(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // Искусственная задержка
      setTimeout(() => resolve(import('./Profile')), 1500)
    }),
)
