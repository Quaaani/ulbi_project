import { routeConfig } from 'app/config'
import { getUserAuthData } from 'entities/User'
import { Suspense, useMemo, memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from 'widgets'

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData)

  const routers = useMemo(
    () =>
      Object.values(routeConfig).filter(
        (route) => !(route.authOnly && !isAuth),
      ),
    [isAuth],
  )
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routers.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  )
}

export default memo(AppRouter)
