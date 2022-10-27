import { memo } from 'react'
import { classNames, Mods } from 'shared/lib/helpers'

import cls from './Text.module.scss'

export enum TextSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  HEADER = 'header',
}

export enum TextType {
  ERROR = 'error'
}

export interface TextProps {
  className?: string
  title?: string | number
  size?: TextSize
  type?: TextType
}

export const Text = memo((props: TextProps) => {
  const { className, title, size = TextSize.SMALL, type, ...restProps } = props

  const mods: Mods = {
    [cls.error]: type === TextType.ERROR,
  }
  return (
    <div
      data-testid="text.test"
      className={classNames(cls.text, mods, [className, cls[size]])}
      {...restProps}
    >
      {title}
    </div>
  )
})
