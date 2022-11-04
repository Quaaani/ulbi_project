import { FC, lazy } from 'react'

import { ProfileProps } from './ProfilePage'

export const ProfileAsync = lazy<FC<ProfileProps>>(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // Искусственная задержка
      setTimeout(() => resolve(import('./ProfilePage')), 1500)
    }),
)
