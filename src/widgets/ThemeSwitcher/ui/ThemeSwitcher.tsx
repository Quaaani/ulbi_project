import { memo } from 'react'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { Button, ButtonTheme } from 'shared/ui'
import { classNames } from 'shared/lib/helpers'
import LightThemeIcon from 'shared/assets/icons/light-theme.svg'
import DarkThemeIcon from 'shared/assets/icons/dark-theme.svg'

import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className } = props
  const { theme, toggleTheme } = useTheme()

  const Icon = theme === Theme.LIGHT ? DarkThemeIcon : LightThemeIcon

  return (
    <Button
      className={classNames(cls.themeSwitcher, {}, [className])}
      icon={Icon}
      iconStyle={cls.icon}
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
    />
  )
})
