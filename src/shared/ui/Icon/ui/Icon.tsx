import { FC, memo } from 'react'

import cls from './Icon.module.scss'

import { classNames, Mods } from '@/shared/lib/helpers'


export enum IconColor {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

export interface IconProps {
  className?: string
  icon: FC<React.SVGProps<SVGSVGElement>>
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
