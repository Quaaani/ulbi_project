import { useContext } from 'react'

import { Theme, LOCAL_STORAGE_THEME_KEY } from '../consts/consts'

import { ThemeContext } from './ThemeContext'

interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    let newTheme: Theme

    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT
        break
      case Theme.LIGHT:
        newTheme = Theme.GREEN
        break
      case Theme.GREEN:
        newTheme = Theme.DARK
        break
      default:
        newTheme = Theme.LIGHT
        break
    }

    setTheme?.(newTheme)

    // Сохраняем состояние темы в Local Storage
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return { theme: theme || Theme.LIGHT, toggleTheme }
}
