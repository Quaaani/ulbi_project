import { ReactNode, useMemo, useState } from 'react'

import { LOCAL_STORAGE_THEME_KEY, Theme } from '../consts/consts'
import { ThemeContext } from '../lib/ThemeContext'

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

interface ThemeProviderProps {
  children?: ReactNode
  initialTheme?: Theme
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, initialTheme } = props

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  )

  // Навешиваем глобальный класс сразу на body
  document.body.className = theme

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
