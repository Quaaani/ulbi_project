import { memo, useCallback } from 'react'

import { ArticleView } from '../../../model/types/articleSchema'

import cls from './ArticleViewSelector.module.scss'

import { classNames, Mods } from '@/shared/lib/helpers'
import TileIcon from '@/shared/assets/icons/tile.svg'
import ListIcon from '@/shared/assets/icons/list.svg'
import { Button, ButtonTheme } from '@/shared/ui/Button'



interface ArticleViewSelectorProps {
  className?: string
  view: ArticleView
  onToggleArticlesView: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.TILE,
    icon: TileIcon,
  },
  {
    view: ArticleView.LIST,
    icon: ListIcon,
  },
]

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onToggleArticlesView } = props

  const onClick = (newView: ArticleView) => () => onToggleArticlesView(newView)

  const mods: Mods = {}
  return (
    <div data-testid="articleViewSelector.test" className={classNames(cls.articleViewSelector, mods, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          className={classNames('', {
            [cls.selected]: viewType.view === view,
          })}
          icon={viewType.icon}
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
        />
      ))}
    </div>
  )
})
