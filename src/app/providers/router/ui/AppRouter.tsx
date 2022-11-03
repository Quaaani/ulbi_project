import { AppRoutesProps, routeConfig } from 'app/config'
import { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useUserAuthData } from 'shared/lib/hooks'
import { PageLoader } from 'widgets'

import { RequireAuth } from './RequireAuth'

const AppRouter = () => {
  const isAuth = useUserAuthData()

  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = <div className="page-wrapper">{route.element}</div>

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
        }
      />
    )
  }, [])

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  )
}

export default memo(AppRouter)
