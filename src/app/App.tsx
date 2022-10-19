import { Suspense, useEffect } from 'react'
import { Navbar, Sidebar } from 'widgets'
import { classNames } from 'shared/lib/helpers'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'

import { AppRouter } from './providers/router'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app')}>
      <Suspense fallback="">
        <Navbar />
        <div className="content">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
