import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/helpers'

import cls from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  CIRCLE = 'circle',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
  inactive?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    theme = ThemeButton.OUTLINE,
    inactive,
    ...restProps
  } = props

  const mods: Record<string, boolean> = {
    [cls.inactive]: inactive
  }

  return (
    <button
      type="button"
      className={classNames(cls.button, mods, [className, cls[theme]])}
      {...restProps}
    >
      {children}
    </button>
  )
}
