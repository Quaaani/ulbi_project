import { HTMLAttributes, memo, ReactNode } from 'react'
import { classNames, Mods } from 'shared/lib/helpers'

import cls from './Card.module.scss'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  renderContent: () => ReactNode
}

export const Card = memo((props: CardProps) => {
  const { className, renderContent, ...restProps } = props

  const mods: Mods = {}
  return (
    <div
      data-testid="card.test"
      className={classNames(cls.card, mods, [className])}
      {...restProps}
    >
      {renderContent()}
    </div>
  )
})
