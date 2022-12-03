import { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from 'widgets'
import { routeConfig } from 'app/config'

import { RequireAuth } from './RequireAuth'

import type { AppRoutesProps } from 'app/config'

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
