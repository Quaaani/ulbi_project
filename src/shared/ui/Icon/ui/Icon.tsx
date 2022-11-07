import { memo, VFC } from 'react'
import { classNames, Mods } from 'shared/lib/helpers'

import cls from './Icon.module.scss'

export enum IconColor {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

export interface IconProps {
  className?: string
  icon: VFC<React.SVGProps<SVGSVGElement>>
  color?: IconColor
}

export const Icon = memo((props: IconProps) => {
  const { className, icon: Icon, color = IconColor.PRIMARY } = props

  const mods: Mods = {
    [cls.primary]: color === IconColor.PRIMARY,
    [cls.inverted]: color === IconColor.INVERTED,
  }
  return <Icon className={classNames(cls.icon, mods, [className])} />
})
