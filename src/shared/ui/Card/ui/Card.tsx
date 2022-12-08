import { HTMLAttributes, memo, ReactNode } from 'react'

import cls from './Card.module.scss'

import { classNames, Mods } from '@/shared/lib/helpers'


export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined'
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  theme?: CardTheme
  renderContent: () => ReactNode
}

export const Card = memo((props: CardProps) => {
  const { className, theme = CardTheme.NORMAL, renderContent, ...restProps } = props

  const mods: Mods = {}
  return (
    <div
      data-testid="card.test"
      className={classNames(cls.card, mods, [className, cls[theme]])}
      {...restProps}
    >
      {renderContent()}
    </div>
  )
})
