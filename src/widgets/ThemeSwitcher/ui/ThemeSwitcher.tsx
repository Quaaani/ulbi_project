import { FC } from 'react'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { Button } from 'shared/ui'
import { classNames } from 'shared/lib/helpers'
import LightThemeIcon from 'shared/assets/icons/light-theme.svg'
import DarkThemeIcon from 'shared/assets/icons/dark-theme.svg'

import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      className={classNames(cls.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? (
        <DarkThemeIcon className={cls.icon} />
      ) : (
        <LightThemeIcon className={cls.icon} />
      )}
    </Button>
  )
}
