import { memo } from 'react'

import cls from './Text.module.scss'

import { classNames, Mods } from '@/shared/lib/helpers'


export enum TextSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  HEADER = 'header',
}

export enum TextType {
  ERROR = 'error',
}

export enum TextColor {
  STANDART = 'standart',
  INVERTED = 'inverted',
}

export interface TextProps {
  className?: string
  title?: string | number
  size?: TextSize
  type?: TextType
  color?: TextColor
}

export const Text = memo((props: TextProps) => {
  const { className, title, size = TextSize.SMALL, type, color = TextColor.STANDART, ...restProps } = props

  const mods: Mods = {
    [cls.error]: type === TextType.ERROR,
  }
  return (
    <div data-testid="text.test" className={classNames(cls.text, mods, [className, cls[size], cls[color]])} {...restProps}>
      {title}
    </div>
  )
})
