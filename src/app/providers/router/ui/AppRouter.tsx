import { routeConfig } from 'app/config'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from 'widgets'

const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {routeConfig.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<div className="page-wrapper">{element}</div>}
        />
      ))}
    </Routes>
  </Suspense>
)

export default AppRouter
