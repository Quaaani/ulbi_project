import { Suspense, useState } from 'react'
import { Navbar, Sidebar } from 'widgets'
import { classNames } from 'shared/lib/helpers'

import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'

function App() {
  const { theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <div className={classNames('app', {}, [theme])}>
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
