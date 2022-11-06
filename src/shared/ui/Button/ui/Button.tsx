import { ButtonHTMLAttributes, memo, VFC } from 'react'
import { classNames, Mods } from 'shared/lib/helpers'

import { Text, TextSize } from '../../Text'

import cls from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  INVERTED = 'inverted',
  CIRCLE = 'circle',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  title?: string
  icon?: VFC<React.SVGProps<SVGSVGElement>>
  iconStyle?: string
  disabled?: boolean
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    title,
    icon: Icon,
    iconStyle,
    theme = ButtonTheme.OUTLINE,
    disabled,
    ...restProps
  } = props

  const titleMods: Mods = {
    [cls.titleWrapper]: !!Icon,
  }
  const iconMods: Mods = {
    [cls.iconClear]: theme === ButtonTheme.CLEAR,
    [cls.iconInverted]: theme === ButtonTheme.INVERTED,
  }
  const mods: Mods = {
    [cls.inactive]: disabled,
  }
  return (
    <button
      data-testid="button.test"
      type="button"
      className={classNames(cls.button, mods, [className, cls[theme]])}
      {...restProps}
    >
      {Icon ? (
        <Icon className={classNames(cls.icon, iconMods, [iconStyle])} />
      ) : null}
      {title ? (
        <div className={classNames('', titleMods)}>
          <Text title={title} size={TextSize.LARGE} />
        </div>
      ) : null}
    </button>
  )
})
