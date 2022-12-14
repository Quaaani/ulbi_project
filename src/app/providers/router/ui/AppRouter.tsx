import { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'

import { RequireAuth } from './RequireAuth'

import type { AppRoutesProps } from '@/app/config'

import { routeConfig } from '@/app/config'
import { PageLoader } from '@/widgets/PageLoader'



const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>

    return <Route key={route.path} path={route.path} element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element} />
  }, [])

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  )
}

export default memo(AppRouter)
