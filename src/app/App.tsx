import { Suspense, useState } from 'react'
import { Navbar, Sidebar } from 'widgets'
import { classNames } from 'shared/lib/helpers'

import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'

const App = () => (
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

export default App
