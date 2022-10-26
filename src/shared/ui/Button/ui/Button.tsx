import { ButtonHTMLAttributes, FC } from 'react'
import { classNames, Mods } from 'shared/lib/helpers'

import cls from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  CIRCLE = 'circle',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  disabled?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    theme = ButtonTheme.OUTLINE,
    disabled,
    ...restProps
  } = props

  const mods: Mods = {
    [cls.inactive]: disabled,
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
