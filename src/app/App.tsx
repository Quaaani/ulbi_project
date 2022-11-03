import { Suspense, useEffect } from 'react'
import { Navbar, Sidebar } from 'widgets'
import { classNames } from 'shared/lib/helpers'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInited, userActions } from 'entities/User'

import { AppRouter } from './providers/router'

const App = () => {
  const dispatch = useDispatch()
  const inited = useSelector(getUserInited)

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app')}>
      <Suspense fallback="">
        <Navbar />
        <div className="content">
          <Sidebar />
          {inited ? <AppRouter /> : null}
        </div>
      </Suspense>
    </div>
  )
}

export default App
