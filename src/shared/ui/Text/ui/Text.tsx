import { FC } from 'react'
import { classNames } from 'shared/lib/helpers'

import cls from './Text.module.scss'

export enum TextSize {
  SMALL = 'small',
  LARGE = 'large',
  HEADER = 'header',
}

interface TextProps {
  className?: string
  size?: TextSize
}

export const Text: FC<TextProps> = (props) => {
  const { children, className, size = TextSize.SMALL, ...restProps } = props
  const mods: Record<string, boolean> = {}

  return (
    <div
      data-testid="text.test"
      className={classNames(cls.text, mods, [className, cls[size]])}
      {...restProps}
    >
      {children}
    </div>
  )
}
