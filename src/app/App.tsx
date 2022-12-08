import { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppRouter } from './providers/router'

import { classNames } from '@/shared/lib/helpers'
import { getUserInited, userActions } from '@/entities/User'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'


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
