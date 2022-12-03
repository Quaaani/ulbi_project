import { memo, SVGProps, VFC } from 'react'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { classNames } from 'shared/lib/helpers'
import LightThemeIcon from 'shared/assets/icons/light-theme.svg'
import DarkThemeIcon from 'shared/assets/icons/dark-theme.svg'
import GreenThemeIcon from 'shared/assets/icons/green-theme.svg'

import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className } = props
  const { theme, toggleTheme } = useTheme()

  let Icon: VFC<SVGProps<SVGSVGElement>>

  switch (theme) {
    case Theme.DARK:
      Icon = LightThemeIcon
      break
    case Theme.LIGHT:
      Icon = GreenThemeIcon
      break
    case Theme.GREEN:
      Icon = DarkThemeIcon
      break
    default:
      Icon = LightThemeIcon
      break
  }

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
