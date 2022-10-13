import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/helpers'

import cls from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    theme = ThemeButton.OUTLINE,
    ...restProps
  } = props

  return (
    <button
      type="button"
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...restProps}
    >
      {children}
    </button>
  )
}
